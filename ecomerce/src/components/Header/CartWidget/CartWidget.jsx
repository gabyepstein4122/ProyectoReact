import './CartWidget.css'

export let valorCarrito = 0
const CartWidget = () => {
    return(
        <>  
            <div className='carrito'>
                <img src="../public/img/Icons/Carrito.png" alt="carrito" width='30px'/>
                <div className='item'><h6>{valorCarrito}</h6></div>
            </div>
        </>
    )
}

export default CartWidget