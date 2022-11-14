import React from 'react'
import { Marker, Popup } from 'react-leaflet';

function Markers() {

    //Tenés que seguir con los markers. Estás haciendo todo de nuevo.
  return (
    <Marker position={['-26.18489', '-58.17313']}>
      <Popup>
        Ciudad de Formosa
      </Popup>
    </Marker>
  )
}

export default Markers