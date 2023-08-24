import './CartWidget.css'

const CartWidget = () => {
    return(
        <>  
            <div className='carrito'>
                <img src="../public/img/Icons/Carrito.png" alt="carrito" width='30px'/>
                <div className='item'><h6>0</h6></div>
            </div>
        </>
    )
}

export default CartWidget