import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
function MapView() {
    
    // Este es tu nuevo map, el otro dejalo de lado por ahora.

  return (
    <MapContainer id="map" center={['-26.18489', '-58.17313']} zoom={12}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
    </MapContainer>
  )
}

export default MapView