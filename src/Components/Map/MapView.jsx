import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Markers from './Markers'
function MapView() {
    
    // Este es tu nuevo map, el otro dejalo de lado por ahora.

  return (
    <div>
      <MapContainer id="map" center={['-26.18489', '-58.17313']} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
          <Marker position={['-26.18489', '-58.17313']}>
            <Popup>
              Formosa Capital
            </Popup>
          </Marker>
      </MapContainer>
    </div>
  )
}

export default MapView