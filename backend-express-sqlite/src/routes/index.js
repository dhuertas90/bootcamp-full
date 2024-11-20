const express = require('express');
const router = express.Router();
const { all, run, del } = require('../models/index'); // Importar la base de datos desde index.js

// Definir las rutas
router.get('/', all);  // Obtener todos los cursos. Maneja GET en la raíz
router.post('/', run); // Crea un nuevo curso. Maneja POST en la raíz

// Nueva ruta para manejar la eliminación de un curso por su id
router.delete('/:id', del); // Maneja DELETE en la ruta con un parámetro id

module.exports = router;