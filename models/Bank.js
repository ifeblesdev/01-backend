import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js'
// const User = require('./User'); // Importamos el modelo User

const Bank = sequelize.define('Bank', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'banks', // Usa el nombre real de la tabla en tu base de datos
  timestamps: true,   // Activa automáticamente createdAt y updatedAt
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// Relación con User (un banco pertenece a un usuario)
Bank.belongsTo(User, { foreignKey: 'usuario', onDelete: 'CASCADE' });

export default Bank;
