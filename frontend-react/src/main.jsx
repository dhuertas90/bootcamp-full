import { StrictMode } from 'react'; // Importa StrictMode de React para ayudar con la depuración
import { createRoot } from 'react-dom/client'; // Importa createRoot para crear el root de la aplicación en React 18+
import App from './App'; // Importa el componente App desde el archivo correspondiente

import './index.css'; // Importa el archivo de estilos CSS globales

// Usa createRoot para crear un root de React en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Envolver la aplicación en StrictMode para activar comprobaciones adicionales en desarrollo */}
    <App /> {/* Renderiza el componente App como el componente raíz de la aplicación */}
  </StrictMode>,
);