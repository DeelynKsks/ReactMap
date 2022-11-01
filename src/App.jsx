import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Select from './Components/Select';
import Mapita from './Components/Mapita';
import { dictionary } from './Helpers/dictionary';

function App() {
  
  const coords = dictionary.coordenadas
  const desc = dictionary.direccion

  return (
    <div>
      <Select/>
      <Mapita/>
    </div>
  )
}

export default App
