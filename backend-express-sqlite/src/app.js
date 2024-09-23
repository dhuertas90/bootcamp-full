const express = require('express'); // importar express
const cors = require('cors');   // importa CORS
const routes = require('./routes'); // importa las rutass

const app = express(); // inicializar la app

// Habilitar CORS para todas las solicitudes
// Sin CORS, el navegador bloquearía solicitudes a orígenes diferentes para proteger la seguridad del usuario.
// Es decir, es necesario para probar en este escenario, desde local.
app.use(cors());

// Middleware para parsear JSON
/* Sin él, el servidor no podría interpretar los datos JSON enviados por el cliente y 
tendrías que lidiar con otros formatos de datos o escribir código adicional para 
analizar manualmente el cuerpo de las solicitudes. */
app.use(express.json());

// Usar las rutas definidas en routes.js
app.use('/', routes);


module.exports = app; // Exportar la configuración de la app