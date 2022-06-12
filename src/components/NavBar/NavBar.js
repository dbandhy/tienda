import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav">

        <Link to="/">
        
            <h1 className="titulo">HI HONEY!</h1>
        </Link>
            <div className="texto">
        
        


                <Link to="/Categoría/MielPura" className="texto"> Miel Pura </Link>
                <Link to="/Categoría/MielInfusionada" className="texto"> Miel Infusionada </Link>
                <Link to="/Categoría/MielGourmet" className="texto"> Miel Gourmet </Link>
                <Link to="/Categoría/MielCosmética" className="texto"> Miel Cosmética </Link>

                
                
            
            </div>
            
            <CartWidget />



        </nav>
        
    )
} 

export default NavBar