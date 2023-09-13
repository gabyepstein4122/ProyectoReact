import { useState } from 'react';
//import addCarrito from '../../utils/AddCarrito';

const Contador = (inicial,stock) => {
    const [contador, cambioEstado] = useState(0)
    
    const sumar = () => {
        if (contador < stock) {
            cambioEstado(contador + 1)
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
                <label className='m-1'>
                    <strong className='btn btn-outline-dark'>
                        <button className='btn btn-outline-dark' onClick={sumar}>+1</button>
                    </strong>
                </label>
            </div>
            <div className="d-grid mt-2">
                <button onClick={console.log('Agegaste esto al')} className='btn btn-outline-dark w-20'>Agregar al carrito</button>
            </div>
        </>
    )
}

export default Contador

