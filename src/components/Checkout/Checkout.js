import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import {Navigate} from 'react-router-dom';
import {addDoc, collection, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore'
import { db } from '../../Firebase/config';
import '../css/Index.css';
import { useForm } from "../Hooks/useForm";

const Checkout = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext()
    const [orderId, setOrderId] = useState()

    const {values, handleInputChange} = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleSubmit = async (e) => {
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

        console.log("Sumbit del form")
        console.log(orden)

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const eventosRef = collection(db, 'eventos')

        const q = query(eventosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const eventos = await getDocs(q)

        const outOfStock = []

        eventos.docs.forEach((doc) =>{
            const itemInCart = cart.find(item => item.id === doc.id) 
            
            if(doc.data().stock >= itemInCart.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart)
            }
            
        })

        if(outOfStock.length === 0){
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                    .then((doc) => {
                        console.log(doc.id)
                        setOrderId(doc.id)
                        terminarCompra()
                    })
                })
        }else{

            alert("Hay items sin stcok")
            console.log(outOfStock)
        }
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

