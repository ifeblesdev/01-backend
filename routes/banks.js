import express from 'express';
import Bank from '../models/bank.js';

const router = express.Router();

// Obtener todos los bancos
router.get('/', async (req, res) => {
  try {
    const banks = await Bank.findAll();
    res.json(banks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener bancos' });
  }
});

// Obtener un banco por ID
router.get('/:id', async (req, res) => {
  try {
    const bank = await Bank.findByPk(req.params.id);
    if (bank) {
      res.json(bank);
    } else {
      res.status(404).json({ error: 'Banco no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el banco' });
  }
});

// Crear un nuevo banco
router.post('/', async (req, res) => {
  try {
    const newBank = await Bank.create(req.body);
    res.status(201).json(newBank);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el banco' });
  }
});

// Actualizar un banco
router.put('/:id', async (req, res) => {
  try {
    const bank = await Bank.findByPk(req.params.id);
    if (bank) {
      await bank.update(req.body);
      res.json(bank);
    } else {
      res.status(404).json({ error: 'Banco no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el banco' });
  }
});

// Eliminar un banco
router.delete('/:id', async (req, res) => {
  try {
    const bank = await Bank.findByPk(req.params.id);
    if (bank) {
      await bank.destroy();
      res.json({ message: 'Banco eliminado' });
    } else {
      res.status(404).json({ error: 'Banco no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el banco' });
  }
});

export default router;
