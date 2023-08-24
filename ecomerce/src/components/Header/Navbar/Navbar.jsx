import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


const Navbar = () => {
    return <>
                <nav className="navbar navbar-expand-lg fondo">
                    <div className="container-fluid justify-content-evenly">
                        <ul className="navbar-nav">
                            <button className='espacio'>
                                Remeras
                            </button>
                            <button className='espacio'>
                                Gorras
                            </button>
                            <button className='espacio'>
                                Pantalones
                            </button>
                            <button className='espacio'>
                                Remeras
                            </button>
                            <CartWidget></CartWidget>
                        </ul>
                    </div>   
                </nav>
            </>
}

export default Navbar

