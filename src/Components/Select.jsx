import React from 'react';
import { useState, useContext } from 'react';
import { dictionary } from './../Helpers/dictionary';
import { MapContext } from '../Context/MapContext';

const Select = () => {
  const { setCoords, setDesc } = useContext(MapContext)

  const exportar = (c) => {
    const coordenadas = dictionary.coordenadas(c)
    const descripcion = dictionary.descripcion(c)

    setDesc(descripcion)
    setCoords(coordenadas)
  }

  return (
    <select name="select-location" id="select-location" onChange={exportar}>
        <option id="Ciudad de Formosa" value="-26.18489, -58.17313">Seleccionar</option>
        <option id="Casa de Jere" value="-26.202781, -58.248008">Local</option>
        <option id="Polo Científico" value="-26.081757, -58.2758653">Local 2</option>
        <option id="Maniiiito" value="-26.1905064, -58.1708186">Casa do Fabiolo</option>
        <option id="Casa de Shei" value="-26.1880147, -58.2204873">Shei's House</option>
        <option id='Casa de Blitoooo' value="-26.1965881, -58.1866464">Casa do blito</option>
    </select>
  )
}

export default Select