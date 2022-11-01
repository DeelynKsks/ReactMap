import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React from 'react'
const Mapita = (props) => {



  return (
    <MapContainer id='map' center={[-26.202781, -58.248008]} zoom={10} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
        <Marker position={[-26.202781, -58.248008]}>
            <Popup>
                <div className='img-container'>
                    <img src="/src/img/WhatsApp Image 2022-11-01 at 12.15.36.jpeg" id='imagen' height="50%" width="50%"/>
                    <br/>
                </div>
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Mapita