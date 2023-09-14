import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail"
import  mockFetch  from "../../utils/mockFetch"
import Cargando from "../Cargando/Cargando"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [ cargando, setCargando ] = useState(true)
    const {id} = useParams()
    useEffect(()=>{
        mockFetch(id)
            .then(result=>setProducto(result))
            .catch(error=>console.log(error))
            .finally(()=> setCargando(false))
    },[id])
    return (
        <>
            {cargando ? <Cargando/> : <ItemDetail producto={producto}/>}
            
        </>
    )
}

export default ItemDetailContainer