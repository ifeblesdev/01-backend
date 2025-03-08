import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';
dotenv.config();  // Cargar las variables de entorno

// Ahora puedes acceder a las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Desactivar logs de SQL en consola
  }
);

sequelize.authenticate()
  .then(() => console.log('🟢 Conectado a PostgreSQL'))
  .catch(err => console.error('🔴 Error al conectar:', err));

export default sequelize;
