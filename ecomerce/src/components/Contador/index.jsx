import { useState } from 'react';
//import addCarrito from '../../utils/AddCarrito';

const Contador = (inicial,stock) => {
    const [contador, cambioEstado] = useState(1)
    
    const sumar = () => {
        if (contador < stock) {
            cambioEstado(contador + 1)
            console.log(contador);
        }

    }
    const restar = () => {
        if (contador > inicial) {
        cambioEstado(contador - 1)    
        }     
    }           
    return (
        <>
            <div className="d-flex justify-content-evenly">
                <button className='btn btn-outline-dark' onClick={restar}>-1</button>
                <strong>{contador}</strong>
                <button className='btn btn-outline-dark' onClick={sumar}>+1</button>
            </div>
            <div className="d-grid mt-2">
                <button onChange={console.log('Agregaste esto al carrito')} className='btn btn-outline-dark w-20'>Agregar al carrito</button>
            </div>
        </>
    )
}

export default Contador

