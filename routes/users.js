import express from 'express';
const router = express.Router();  // Usa el router de Express

// Definir las rutas
router.get('/', async (req, res) => {
  res.send('Lista de Usuarios');
});

// Exportar el router correctamente
export default router;
