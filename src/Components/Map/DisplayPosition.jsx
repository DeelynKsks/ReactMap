import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useMap, useMapEvents, Marker } from 'react-leaflet';
import { MapContext } from './../../Context/MapContext';

function DisplayPosition() {

    const { coords, setLocation } = useContext(MapContext)

    
  return (
    <p>
      
    </p>
  )
}

export default DisplayPosition