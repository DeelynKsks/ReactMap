import { React, useContext } from 'react'
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { MapContext } from './../../Context/MapContext';
import logo from '../../img/WhatsApp Image 2022-11-01 at 12.15.36.jpeg'
function Markers() {

  const { coords, setCoords, desc, setDesc } = useContext(MapContext);

  // const imgRender = () => {
  //   return <div><img id='imagen' src={logo} alt=""/>{desc}</div>
  // }
  // {(desc == 'Polo Científico')?imgRender():desc}

  const mapita = useMap()
  mapita.flyTo(coords, mapita.getZoom(8))
  
  const map = useMapEvents({
    click(e){
      setCoords(e.latlng)
      setTimeout(() => {
        setDesc('Has hecho click aquí')
      }, 200);
      map.flyTo(e.latlng);
    }
})
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