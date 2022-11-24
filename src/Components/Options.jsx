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
    const renderizar = opt.map(asd => asd.Descripcion)
    
    return (
           <>
            {renderizar.map((kkk, index) => <option key={index}>{kkk}</option>)}
           </>
           
    )
}

export default Options