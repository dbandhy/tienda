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
        
        


                <NavLink to="/Categoria/MielPura" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Pura </NavLink>
                <NavLink to="/Categoria/MielInfusionada" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Infusionada </NavLink>
                <NavLink to="/Categoria/MielGourmet" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Gourmet </NavLink>
                <NavLink to="/Categoria/MielCosmética" className= {({ isActive }) => isActive ? 'texto' : 'textoSeleccionado'}> Miel Cosmética </NavLink>

                
                
            
            </div>
            
            <CartWidget />



        </nav>
        
    )
} 

export default NavBar