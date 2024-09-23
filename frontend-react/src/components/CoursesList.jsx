import React, { useState, useEffect } from 'react'; // Importa React y hooks necesarios

const CoursesList = () => {
    // Usa el hook useState para manejar el estado de la lista de cursos
    const [courses, setCourses] = useState([]);

    // Usa el hook useEffect para realizar una acción después de que el componente se monte
    useEffect(() => {
        // Hace una solicitud HTTP al servidor para obtener los cursos
        fetch('http://localhost:3001/')
            .then((response) => response.json()) // Convierte la respuesta en formato JSON
            .then((data) => setCourses(data.data)) // Actualiza el estado con los cursos obtenidos
            .catch((error) => console.error('Error fetching courses:', error)); // Maneja cualquier error durante la solicitud
    }, []); // El array vacío indica que este efecto solo se ejecuta una vez, cuando el componente se monta

    return (
        <div>
            <h1>Lista de Cursos</h1> {/* Título de la lista de cursos */}
            <ul>
                {/* Mapea sobre el array de cursos y crea un elemento de lista para cada curso */}
                {courses.map((course) => (
                    <li key={course.id_curso}>{course.titulo}</li> // Usa el id del curso como clave única
                ))}
            </ul>
        </div>
    );
};

export default CoursesList; // Exporta el componente para que pueda ser usado en otras partes de la aplicación