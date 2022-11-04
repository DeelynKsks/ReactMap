import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Select from './Components/Select';
import Mapita from './Components/Mapita';
import { dictionary } from './Helpers/dictionary';

function App() {

  // const valores = () => {
  //   AuthConext.provider value={(
  //     coordenadas,
      
  //   )}
  // }
  const [cords, setCords]= useState();
  const [direc, setDirec] = useState();
  const traer = (a) => {
    const cordinates = dictionary.coordenadas(a)
    setCords(cordinates)
    setDirec(dictionary.descripcion(a))
    console.log(cords, direc)
  }

  return (
    <div>
      <Select captura={traer} />
      <Mapita mostrar={cords} desc={direc}/>
    </div>
  )
}

export default App
