# IFFP - Backend API

**IFFP Backend API** es una API RESTful que va a formar parte del sistema de **IF FINANZAS PERSONALES**. Esta API maneja la interacción con la base de datos, proporcionando endpoints para gestionar usuarios, bancos y otras entidades.

## Características principales

- **Gestión de Usuarios**: CRUD completo para administrar los usuarios, con autenticación y autorización.
- **Gestión de Bancos**: CRUD completo para administrar bancos, permitiendo a los administradores realizar operaciones de lectura, creación, actualización y eliminación.
- **Conexión con PostgreSQL**: Base de datos PostgreSQL para almacenar la información de manera eficiente.
- **CORS**: Habilitación de CORS para permitir el acceso desde otras aplicaciones cliente.
- **Autenticación**: Implementación de JWT (JSON Web Token) para autenticación y protección de rutas.

## Tecnologías utilizadas

- **Backend**: Node.js, Express
- **Base de datos**: PostgreSQL
- **ORM**: Sequelize
- **Autenticación**: JWT (JSON Web Token)
- **Middleware**: CORS, Express JSON
- **Entorno**: Variables de entorno cargadas desde `.env`

## Instalación

Para ejecutar esta aplicación de manera local, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/ifeblesdev/01-backend

