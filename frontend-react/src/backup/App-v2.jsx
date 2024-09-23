import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [cursos, setCursos] = useState([]);
    const [titulo, setTitulo] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/cursos')
            .then(response => response.json())
            .then(data => setCursos(data.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/cursos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo }),
        })
            .then(response => response.json())
            .then(data => {
                setCursos([...cursos, data.data]);  // Añadir el nuevo curso a la lista
                setTitulo('');  // Limpiar el campo del formulario
            });
    };

    return (
        // <div style={{marginLeft: '9px'}}>
        <div className="content-curso">
            <h1>Datos de los cursos</h1>
            <ul>
                {cursos.map((curso) => (
                    <li key={curso.id_curso}>{curso.titulo}</li>
                ))}
            </ul>

            <h2>Agregar un nuevo curso</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Título del curso"
                />
                <button type="submit">Agregar Curso</button>
            </form>

        </div>
    );
}

export default App;
