export const dictionary = {
    coordenadas:(c) => {

        const coordenadas = c.target.value.split(", ")

        return(coordenadas)

    },

    descripcion:(c) => {

        const lista = c.target

        const coordenadas1 = c.target.value
        
        let descripcion

        for (let i = 0; i < lista.length; i++) {
            
            if (lista[i].value == coordenadas1) descripcion = lista[i].id
        }
        
        return(descripcion)
    },
    traer: async () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json")
        
            const requestOptions = ({
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            })
        
            try {
              const res = await fetch("http://localhost:7000/coords", requestOptions)
              const resjson = await res.json()
              return resjson
            } catch (error) {
              console.log(error)
            }
          }
    }
