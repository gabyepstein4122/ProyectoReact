import { Link } from 'react-router-dom'

import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"



const Header = () => {
    return(
        <>
            <div className="container-flex">
                <Link to="/">
                    <Logo/>
                </Link>
                <Navbar/>
            </div>
        </>
    )
}

export default Header