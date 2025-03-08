// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
import Bank from './models/bank.js';

async function fetchBanks() {
  try {
    const banks = await Bank.findAll(); // Obtén todos los registros de bancos
    console.log(banks); // Imprime los resultados en la consola
  } catch (error) {
    console.error('Error al obtener los bancos:', error);
  }
}

fetchBanks();
