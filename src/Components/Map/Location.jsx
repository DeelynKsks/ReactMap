import { map } from 'leaflet'
import React from 'react'
import { useState } from 'react'
import { useMapEvents, Marker, Popup } from 'react-leaflet'

function Location() {
    return map.flyTo([-26.18489, -58.17313])
}

export default Location