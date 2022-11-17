import { React, useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapContext } from './../../Context/MapContext';

function MapView() {
    
  const { coords, desc } = useContext(MapContext)
  // Este es tu nuevo map, el otro dejalo de lado por ahora.

  return (
    <div>  
      <MapContainer id="map" center={coords} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
          <Marker position={coords}>
            <Popup>
              {desc}
            </Popup>
          </Marker>
      </MapContainer>
    </div>
  )
}

export default MapView