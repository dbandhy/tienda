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
        
        


                <NavLink to="/categoria/MielPura" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Pura </NavLink>
                <NavLink to="/categoria/MielInfusionada" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Infusionada </NavLink>
                <NavLink to="/categoria/MielGourmet" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Gourmet </NavLink>
                <NavLink to="/categoria/MielCosmética" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Cosmética </NavLink>

                
                
            
            </div>
            
            <CartWidget />



        </nav>
        
    )
} 

export default NavBar