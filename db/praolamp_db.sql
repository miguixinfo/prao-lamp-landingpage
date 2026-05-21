------------------------------------------------------------------
-- DEV
------------------------------------------------------------------
CREATE DATABASE praolamp_dev
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA praolamp_dev TO n8n_worker;

-- 1. Nos aseguramos de que el esquema del proyecto existe
CREATE SCHEMA IF NOT EXISTS praolamp_dev;

-- 2. Creamos la tabla de contactos/leads
CREATE TABLE praolamp_dev.contact_forms (
    -- Identificador único
    id SERIAL PRIMARY KEY,
    
    -- Datos del formulario
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    
    -- Metadatos y Auditoría técnica (Navegador, IP, Localización, etc.)
    -- Guardamos todo el objeto del webhook aquí para analítica futura
    metadata JSONB DEFAULT '{}'::jsonb,
    
    -- Campos de Auditoría temporal
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Creamos un índice sobre el email y el JSONB para que las consultas sean rápidas
CREATE INDEX idx_contact_email ON praolamp_dev.contact_forms (email);
CREATE INDEX idx_contact_metadata ON praolamp_dev.contact_forms USING GIN (metadata);

-- 4. Permisos para que n8n pueda insertar
GRANT ALL PRIVILEGES ON TABLE praolamp_dev.contact_forms TO n8n_worker;
GRANT USAGE, SELECT ON SEQUENCE praolamp_dev.contact_forms_id_seq TO n8n_worker;

------------------------------------------------------------------
-- PARCHE: AÑADIR CONTROL DE REPORTES (DEV)
------------------------------------------------------------------
-- 1. Añadimos la columna con valor por defecto FALSE
ALTER TABLE praolamp_dev.contact_forms 
ADD COLUMN report_sent BOOLEAN DEFAULT FALSE NOT NULL;

-- 2. Creamos un índice parcial (solo indexa los que NO se han enviado)
-- Esto hace que la consulta del Cron Job sea ultra eficiente
CREATE INDEX idx_contact_report_not_sent 
ON praolamp_dev.contact_forms (report_sent) 
WHERE report_sent = FALSE;


------------------------------------------------------------------
-- PROD
------------------------------------------------------------------
CREATE DATABASE praolamp_prod;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA praolamp_prod TO n8n_worker;

-- 1. Nos aseguramos de que el esquema del proyecto existe
CREATE SCHEMA IF NOT EXISTS praolamp_prod;

-- 2. Creamos la tabla de contactos/leads
CREATE TABLE praolamp_prod.contact_forms (
    -- Identificador único
    id SERIAL PRIMARY KEY,
    
    -- Datos del formulario
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    
    -- Metadatos y Auditoría técnica (Navegador, IP, Localización, etc.)
    -- Guardamos todo el objeto del webhook aquí para analítica futura
    metadata JSONB DEFAULT '{}'::jsonb,
    
    -- Campos de Auditoría temporal
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Creamos un índice sobre el email y el JSONB para que las consultas sean rápidas
CREATE INDEX idx_contact_email ON praolamp_prod.contact_forms (email);
CREATE INDEX idx_contact_metadata ON praolamp_prod.contact_forms USING GIN (metadata);

-- 4. Permisos para que n8n pueda insertar
GRANT ALL PRIVILEGES ON TABLE praolamp_prod.contact_forms TO n8n_worker;
GRANT USAGE, SELECT ON SEQUENCE praolamp_prod.contact_forms_id_seq TO n8n_worker;

------------------------------------------------------------------
-- PARCHE: AÑADIR CONTROL DE REPORTES (PROD)
------------------------------------------------------------------
-- 1. Añadimos la columna con valor por defecto FALSE
ALTER TABLE praolamp_prod.contact_forms 
ADD COLUMN report_sent BOOLEAN DEFAULT FALSE NOT NULL;

-- 2. Creamos el índice parcial equivalente en producción
CREATE INDEX idx_contact_report_not_sent 
ON praolamp_prod.contact_forms (report_sent) 
WHERE report_sent = FALSE;