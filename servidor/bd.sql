-- Crear la base de datos
CREATE DATABASE datos_usuarios;

-- Usar la base de datos
USE datos_usuarios;

-- Crear la tabla "usuarios"
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada usuario
  nombre VARCHAR(100) NOT NULL,      -- Nombre del usuario, máximo 100 caracteres
  correo VARCHAR(100) NOT NULL,      -- Correo electrónico del usuario, máximo 100 caracteres
  edad INT NOT NULL                  -- Edad del usuario, un número entero
);
