import './App.css'
import React, { useState } from 'react';
import { Caja } from './components/Caja'


// esto es un componente
// function App() {

// }

// export default App



function App() {
    const [a, setA] = useState(0) // hook
    return (
        <>
            <button onClick={()=> setA(a+1)}>Presione</button>
            {a}
        </>
    )
}

export default App
