import Sequelize from "sequelize";
import db from "../config/db.js";

export const Review = db.define('Review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    puntuacion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    viajeId: {  // FK
        type: Sequelize.INTEGER,
        references: {
            model: "viajes",
            key: "id",
        },
        onDelete: "CASCADE",
    },
}, {
    tableName: 'reviews',
    // timestamps: false, // Si no deseas los campos `createdAt` y `updatedAt`
});

Review.sync({ alter: true }).catch(console.error);
