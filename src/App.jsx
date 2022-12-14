import { useState } from 'react'
import './App.css'
import Select from './Components/Select';
import MapView from './Components/Map/MapView';
import { MapContext } from './Context/MapContext';

function App() {
  
  const [ coords, setCoords ] = useState([-26.18489, -58.17313])
  const [ desc, setDesc] = useState('Ciudad de Formosa')
  const [ location, setLocation ] = useState([])

  return (
      <MapContext.Provider value={{coords, setCoords, desc, setDesc, location, setLocation}}>
        <Select/>
        <MapView />
        
      </MapContext.Provider>
  )
}

export default App
