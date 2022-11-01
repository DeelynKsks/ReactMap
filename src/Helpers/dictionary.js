export const dictionary = {
    coordenadas:(c) => {

        const coordenadas = c.target.value.split(",")

        return console.log(coordenadas)

    },

    direccion:(c) => {

        const lista = c.target

        const coordenadas1 = c.target.value
        
        let descripcion

        for (let i = 0; i < lista.length; i++) {
            
            if (lista[i].value == coordenadas1) descripcion = lista[i].id
        }
        
        return console.log(descripcion)
    }
}