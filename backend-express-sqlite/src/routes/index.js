const express = require('express');
const router = express.Router();
const { all, run } = require('../models/index'); // Importar la base de datos desde index.js

// Definir las rutas
router.get('/', all);  // Maneja GET en la raíz
router.post('/', run); // Maneja POST en la raíz

module.exports = router;