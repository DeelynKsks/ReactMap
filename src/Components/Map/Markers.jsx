import { React, useContext } from 'react'
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { MapContext } from './../../Context/MapContext';
import logo from './img/icon.jpeg'
function Markers() {

  const { coords, desc } = useContext(MapContext);

  // const imgRender = () => {
  //   return <div><img id='imagen' src={logo} alt=""/>{desc}</div>
  // }
  // {(desc == 'Polo Científico')?imgRender():desc}
  const mapita = useMap()
  mapita.flyTo(coords, mapita.getZoom(8))
  
  //Tenés que seguir con los markers. Estás haciendo todo de nuevo.
  return (
    <Marker position={coords}>
      <Popup>
        {desc}
      </Popup>
    </Marker>
  )
}

export default Markers