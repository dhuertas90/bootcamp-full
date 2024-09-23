import React from 'react'; // Importa React para usar JSX y definir componentes
import Form from './components/Form'; // Importa el componente Form desde el archivo correspondiente
// import CoursesList from './components/CoursesList'; // Importa el componente CoursesList desde el archivo correspondiente
import './App.css'; // Importa el archivo de estilos CSS para aplicar estilos al componente App

// Define el componente funcional App
function App() {
    return (
        <div className="App"> {/* Aplicar estilos CSS al contenedor principal */}
            <Form /> {/* Renderiza el componente Form */}
            {/* Puedes descomentar la siguiente línea para mostrar la lista de cursos */}
            {/* <CoursesList /> */}
        </div>
    );
}

export default App; // Exporta el componente App para que pueda ser utilizado en otros archivos de la aplicación
