import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Contador from '../Contador';


const ItemCard = ({producto}) => {
    return (
        <>
            <div className="card w-25 d-flex justify-content-evenly">
                <div className="card-header">
                    <h5>{producto.nombre.toUpperCase()}</h5>
                </div>
                <div className="card-body">
                    <img className="w-70 card-img-top" src={producto.imagen} alt="imagen prenda"/>
                    <h4>Precio: {producto.precio}</h4>
                </div>
                <div className="card-footer">
                    <Link to={`/detalle/id/${producto.id}`} className="btn btn-outline-dark w-20">
                        + Detalles
                    </Link>
                </div>
                <Contador/>
            </div>
        </>
    )
}

ItemCard.propTypes = {
    producto: PropTypes.object.isRequired
};

export default ItemCard