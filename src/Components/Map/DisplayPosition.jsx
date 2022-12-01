import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useMap, useMapEvents } from 'react-leaflet';
import { MapContext } from './../../Context/MapContext';

function DisplayPosition() {

    const { coords, mapita, setMapita } = useContext(MapContext)

    console.log(crds)

    const map = useMapEvents({
        click(){
            const asd = map.distance(crds)
            console.log(asd)
        }
    })

    const [position, setPosition] = useState(() => map.getCenter())
    
    // const onClick = useCallback(() => {
    //     map.setView(center, zoom)
    // }, [map])
    
    // const onMove = useCallback(() => {
    //     setPosition(map.getCenter())
    // }, [map])
    
    // useEffect(() => {
    //     map.on('move', onMove)
    //     return () => {
    //     map.off('move', onMove)
    //     }
    // }, [map, onMove])
    const sss = () => {
        
    }
    
  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button >reset</button>
    </p>
  )
}

export default DisplayPosition