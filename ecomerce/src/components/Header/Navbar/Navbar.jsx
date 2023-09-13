import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'




const Navbar = () => {
    return <>
                <nav className="navbar navbar-expand-lg fondo">
                    <div className="container-fluid justify-content-evenly">
                        <ul className="navbar-nav">
                            <Link to='/categoria/remeras' className='espacio button'>
                                Remeras
                            </Link>
                            <Link to='/categoria/gorras' className='espacio button'>
                                Gorras
                            </Link>
                            <Link to='/categoria/pantalones' className='espacio button'>
                                Pantalones
                            </Link>
                            <Link to='/categoria/buzos' className='espacio button'>
                                Buzos
                            </Link>
                            <Link to='/carrito'>
                                <CartWidget/>
                            </Link>
                        </ul>
                    </div>   
                </nav>
            </>
}

export default Navbar


