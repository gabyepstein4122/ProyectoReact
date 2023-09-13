import { useEffect, useState} from "react"
import PropTypes from "prop-types";

import mockFetch  from "../../utils/mockFetch"
import Cargando from "../Cargando/Cargando"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({categoria}) => { 
    const [productos, setProductos] = useState([])
    const [ cargando, setCargando ] = useState(true)

    useEffect(() => {
        setCargando(true);
        const cargarProductos = async () => {
            try {
                const respuesta = await mockFetch();
                
                if (!categoria) {
                setProductos(respuesta);
                } else {
                
                const productosFiltrados = respuesta.filter(
                    (producto) => producto.categoria === categoria
                );
                setProductos(productosFiltrados);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setCargando(false);
            }
            };
        
            cargarProductos();
        }, [categoria]);

    return (
        <center>
            <div className="row container m-5">
            { cargando ? <Cargando/> : <ItemList productos={productos} clasName="p-5"/>}
            </div>
        </center>
    )
}

ItemListContainer.propTypes = {
    categoria: PropTypes.object.isRequired
    };

export default ItemListContainer

