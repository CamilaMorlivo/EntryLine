import { stock } from "../basededatos/productos"

export const getData = () =>{ 

    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            resolve(stock)
        }, 3000)
    })

}