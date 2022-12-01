import { React, useContext, useState } from 'react'
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import { MapContext } from './../../Context/MapContext';
import Markers from './Markers';
import DisplayPosition from './DisplayPosition';

function MapView() {

  const { coords } = useContext(MapContext)
  
  return (
    <div id='cuadrito'>
      <MapContainer id="map" center={coords} zoom={12}>
          <DisplayPosition/>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
          <Markers/>
      </MapContainer>
    </div>
  )
}

export default MapView