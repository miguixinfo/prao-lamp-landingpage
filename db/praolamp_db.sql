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
