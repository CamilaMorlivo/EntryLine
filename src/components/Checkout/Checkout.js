import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import {Navigate} from 'react-router-dom';
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../Firebase/config';
import '../css/Index.css';

const Checkout = () => {

    const {cart, cartTotal, terminarCompra, terminarCompraConSwalAlert} = useCartContext()
    const [orderId, setOrderId] = useState()
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })


    const handleInputChange = (e) => {
        setValues({
            ...values,
           [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden ={
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        if(values.nombre.length < 3){
            alert("Nombre incorrecto")
            return
        }

        if(values.email.length < 2){
            alert("Email incorrecto")
            return
        }

        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                // terminarCompraConSwalAlert(doc.id)
                setOrderId(doc.id)
                terminarCompra()
            })

        console.log("Sumbit del form")
        console.log(orden)
    }

    if(orderId){

       return( 
            <div className="divCheckout">
                <div className="formCheckout">
                    <h2>Compra exitosa!</h2>
                    <hr/>
                    <p>Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            </div>
            
        )
    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }

    return(
        <div className="divCheckout">


            <form className="formCheckout">

                <h2>Checkout</h2>

                <input 
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Nombre"
                />

                <input 
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    type={'email'} 
                    className="my-3 form-control" 
                    placeholder="Email"
                />
                <input 
                    name="direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Dirección"
                />

                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Enviar  
                </button>

            </form>
        
        </div>

    )

}

export default Checkout;

