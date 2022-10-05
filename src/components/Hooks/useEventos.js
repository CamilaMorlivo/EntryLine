import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config";

export const useEventos = () => {

    const [eventos, setEventos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const eventosRef = collection(db, 'eventos')
        const q = categoryId
                ? query(eventosRef, where('category', '==', categoryId))
                : eventosRef


        getDocs(q)
            .then((resp) =>{
                const eventosDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                console.log(eventosDB)

                setEventos(eventosDB)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [categoryId])

    return({
      eventos, loading  
    })
}







