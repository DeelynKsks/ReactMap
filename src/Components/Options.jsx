import React from 'react'
import { dictionary } from './../Helpers/dictionary';

function Options() {

    const traer = async() => {
        const list = await dictionary.traer()

        list.map(()=>{
            <option value={list.Coordenadas}>{list.Descripcion}</option>
        })
        
    }
    return (
        <>
            {async() => {
                const list = await dictionary.traer()

                list.map(()=>{
                    return <option value={list.Coordenadas}>{list.Descripcion}</option>
                })
            }}
        </>
    )
}

export default Options