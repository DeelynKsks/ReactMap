import React from 'react'
import { useState, useEffect } from 'react'
import { dictionary } from './../Helpers/dictionary';

function Options() {

    const [ opt, setOpt] = useState([])
    
    const traer = async() => {
        const list = await dictionary.traer()
        setOpt(list)
    }
    useEffect(() => {traer()}, [])
    const renderizar = opt.map(asd => [asd.Descripcion, asd.Coordenadas])
    
    return (
           <>
            <option value="-26.18489, -58.17313">Formosa</option>
            {renderizar.map((kkk, index) => <option value={kkk[1]} id={kkk[0]} key={index}>{kkk[0]}</option>)}
           </>
           
    )
}

export default Options