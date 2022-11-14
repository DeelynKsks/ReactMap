import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Select from './Components/Select';
import Mapita from './Components/Mapita';
import { dictionary } from './Helpers/dictionary';
import MapView from './Components/Map/MapView';
import Markers from './Components/Map/Markers';

function App() {

  // const valores = () => {
  //   AuthConext.provider value={(
  //     coordenadas,
      
  //   )}
  // }
  // const [cords, setCords]= useState();
  // const [direc, setDirec] = useState();
  
  // const traer = (a) => {
  //   const cordinates = dictionary.coordenadas(a)
  //   setCords(cordinates)
  //   setDirec(dictionary.descripcion(a))
  // }

  return (
    <div>
      <Select />
      <MapView/>
      
    </div>
  )
}

export default App
