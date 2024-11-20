const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../db/cilsa_pof.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

const all = (req, res) => {
    const sql = 'SELECT * FROM curso';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
};

const run = (req, res) => {
    const { titulo } = req.body;
    if (!titulo) {
        res.status(400).json({ error: 'El título es requerido' });
        return;
    }

    const sql = 'INSERT INTO curso (titulo) VALUES (?)';
    const params = [titulo];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Curso creado con éxito',
            data: { id_curso: this.lastID, titulo }
        });
    });
};

// Este podría ser el codigo para eliminar
const del = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM curso WHERE id_curso = ?';
    const params = [id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: `Curso con ID ${id} eliminado` });
    });
};

module.exports = { all, run, del };
