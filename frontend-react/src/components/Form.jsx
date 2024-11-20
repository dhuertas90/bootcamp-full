import React, { useEffect, useState } from 'react'; // Importa React y hooks necesarios
import '../App.css'; // Importa el archivo de estilos CSS. Asegúrate de que la ruta sea correcta

// Define el componente funcional Form
function Form() {
    // Usa el hook useState para manejar el estado de los cursos y el título del nuevo curso
    const [cursos, setCursos] = useState([]); // Estado para almacenar la lista de cursos
    const [titulo, setTitulo] = useState(''); // Estado para almacenar el título del nuevo curso

    // Usa el hook useEffect para realizar una acción después de que el componente se monte
    useEffect(() => {
        // Hace una solicitud HTTP al servidor para obtener la lista de cursos
        fetch('http://localhost:3001/')
            .then(response => response.json()) // Convierte la respuesta en formato JSON
            .then(data => setCursos(data.data)) // Actualiza el estado con los cursos obtenidos
            .catch(error => console.error('Error fetching courses:', error)); // Maneja cualquier error durante la solicitud
    }, []); // El array vacío indica que este efecto solo se ejecuta una vez, cuando el componente se monta

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
        
        // Hace una solicitud POST al servidor para agregar un nuevo curso
        fetch('http://localhost:3001/', {
            method: 'POST', // Método HTTP para enviar datos al servidor
            headers: {
                'Content-Type': 'application/json', // Tipo de contenido que estamos enviando
            },
            body: JSON.stringify({ titulo }), // Convierte el título en una cadena JSON
        })
            .then(response => response.json()) // Convierte la respuesta en formato JSON
            .then(data => {
                // Actualiza el estado con el nuevo curso añadido
                setCursos([...cursos, data.data]); // Añadir el nuevo curso a la lista de cursos
                setTitulo(''); // Limpia el campo del formulario después de agregar el curso
            })
            .catch(error => console.error('Error adding course:', error)); // Maneja cualquier error durante la solicitud
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/${id}`, {
            method: 'DELETE', // Método HTTP para eliminar un curso
        })
            .then(response => response.json()) // Convierte la respuesta en formato JSON
            .then(() => {
                // Filtra la lista de cursos para remover el curso eliminado
                const updatedCursos = cursos.filter(curso => curso.id_curso !== id);
                setCursos(updatedCursos); // Actualiza el estado con la lista de cursos filtrada
            })
            .catch(error => console.error('Error deleting course:', error)); // Maneja cualquier error durante la solicitud
    };
    

    return (
        <div className="content-curso">
            <h1>Cursos en CILSA 2025</h1>
            
            <ul>
                {/* Mapea sobre el array de cursos y crea un elemento de lista para cada curso */}
                {cursos.map((curso) => (
                    <li key={curso.id_curso}>
                        {curso.titulo} {/* Muestra el título del curso */}
                        <button onClick={() => handleDelete(curso.id_curso)}>Eliminar</button> {/* Botón para eliminar el curso */}
                    </li>
                ))}
            </ul>

            <h2>Agregar un nuevo curso</h2>
            
            <form onSubmit={handleSubmit}> {/* Maneja el envío del formulario */}
                <input
                    type="text" // Tipo de entrada de texto
                    value={titulo} // Valor del campo de entrada vinculado al estado `titulo`
                    onChange={(e) => setTitulo(e.target.value)} // Actualiza el estado `titulo` con el valor del campo
                    placeholder="Título del curso" // Texto de ayuda mostrado en el campo de entrada
                    required // Hace que el campo sea obligatorio
                />
                <button type="submit">Agregar</button> {/* Botón para enviar el formulario */}
            </form>
        </div>
    );
}

export default Form; // Exporta el componente Form para que pueda ser usado en otras partes de la aplicación
