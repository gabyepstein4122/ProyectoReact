import PropTypes from 'prop-types';

import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({ productos }) => {
    
    return (            
        <>
            {productos.map(producto => (
                <ItemCard key={producto.id} producto={producto}/>
            ))}
        </>
    )
}

ItemList.propTypes = {
    productos: PropTypes.array.isRequired
};

export default ItemList;
