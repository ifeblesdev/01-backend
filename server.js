import express, { json } from 'express';
import cors from 'cors';
import sequelize from './config/database.js'; // Verifica que esto sea correcto
import userRoutes from './routes/users.js';
import bankRoutes from './routes/banks.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/banks', bankRoutes);

// Levantar el servidor y sincronizar modelos
app.listen(PORT, async () => {
  try {
    // Asegúrate de usar sequelize.sync() y no solo sync()
    await sequelize.sync({ alter: true }); // Sincroniza modelos con la BD
    console.log('🟢 Base de datos sincronizada');
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('🔴 Error al sincronizar la base de datos:', error);
  }
});
