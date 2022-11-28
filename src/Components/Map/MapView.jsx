import { React, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapContext } from './../../Context/MapContext';
import Markers from './Markers';

function MapView() {
    
  const { coords } = useContext(MapContext)
  // Este es tu nuevo map, el otro dejalo de lado por ahora.

  
  return (
    <div id='cuadrito'>  
      <MapContainer id="map" center={coords} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
          <Markers/>
      </MapContainer>
    </div>
  )
}

export default MapView