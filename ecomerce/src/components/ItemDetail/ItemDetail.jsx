import PropTypes from 'prop-types';
import Contador from "../Contador"

const ItemDetail = ({producto}) => {
    return (
        <div className='border border-dark mt-5 container w-50'>
            <center><h3 className='mt-3'>Vista de Detalles</h3></center>
            <div className="row m-5 mb-5">
                <div className="col-md-6 mt-5">
                    <h4>{producto.nombre}</h4>
                    <img className="w-50 card-img-top container" src={producto.imagen} alt="imagen prenda"/>
                </div>
                <div className="col-md-6">
                    <p>Descripcion: {producto.descripcion}</p>
                    <p>Precio: {producto.precio}</p>
                    <p>Disponibles: {producto.stock}</p>
                    <Contador inicial={1} stock={producto.stock}/>
                </div>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    producto: PropTypes.object.isRequired
};

export default ItemDetail