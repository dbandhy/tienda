import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link , NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav">

        <Link to="/">
        
            <h1 className="titulo">HI HONEY!</h1>
        </Link>
            <div className="nav">
        
        


                <NavLink to="/categoria/pura" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> pura </NavLink>
                <NavLink to="/categoria/infusionada" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> infusionada </NavLink>
                <NavLink to="/categoria/gourmet" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> gourmet </NavLink>
                <NavLink to="/categoria/MielCosmética" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> cosmética </NavLink>

                
                
            
            </div>
            
            <CartWidget />



        </nav>
        
    )
} 

export default NavBar