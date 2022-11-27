import React from 'react';
import { useContext } from 'react';
import { dictionary } from './../Helpers/dictionary';
import { MapContext } from '../Context/MapContext';
import Options from './Options';

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
      <option value="-26.18489, -58.17313">Formosa</option>
      <Options/>
    </select>
  )
}

export default Select