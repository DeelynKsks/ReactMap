import React from 'react'
import { useState } from 'react'
import { dictionary } from './../Helpers/dictionary';


const Select = (props) => {

  return (
    <select name="select-location" id="select-location" onChange={props.captura}>
        <option id="Ciudad de Formosa" value="-26.18489, -58.17313">Seleccionar</option>
        <option id="Casa de Jere" value="-26.202781, -58.248008">Local</option>
        <option id="Polo Científico" value="-26.081757, -58.2758653">Local 2</option>
    </select>
  )
}

export default Select