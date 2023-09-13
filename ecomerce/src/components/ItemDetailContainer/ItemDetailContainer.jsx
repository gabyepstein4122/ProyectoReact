import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import  mockFetch  from "../../utils/mockFetch"
import Cargando from "../Cargando/Cargando"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [ cargando, setCargando ] = useState(true)
    const {id} = useParams()
    let numeroId = Number(id)
    useEffect(()=>{
        mockFetch(numeroId)
            .then(result=>setProducto(result))
            .catch(error=>console.log(error))
            .finally(()=> setCargando(false))
    },)
    
    
    return (
        <>
            {cargando ? <Cargando/> : <ItemDetail productos={producto}/>}
        </>
    )
}

export default ItemDetailContainer