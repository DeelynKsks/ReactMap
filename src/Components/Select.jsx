import React from 'react'
import { dictionary } from './../Helpers/dictionary';

const Select = (props) => {
    
    const { funcion1 } = props

  return (
    <select name="select-location" id="select-location" onChange={funcion1}>
        <option value="-1">Seleccionar</option>
        <option id="Casa de Jere" value="-26.202781, -58.248008">Local</option>
        <option id="Polo Científico" value="-26.081757, -58.2758653">Local 2</option>
    </select>
  )
}

export default Select