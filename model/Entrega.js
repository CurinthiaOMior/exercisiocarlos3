const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Entrega = sequelize.define('entrega', {
    codEntrega: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    destino: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('ENTREGUE', 'TRANSITO'),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    codCarga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cargas',
            key: 'codCarga'
        }
    }
}, {
    tableName: 'entregas',
    timestamps: false
});

module.exports = Entrega