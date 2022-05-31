import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav">
            <h1 className="titulo">HI HONEY!</h1>
            <div>


                <button className="texto"> Miel Pura </button>
                <button className="texto"> Miel Infusionada </button>
                <button className="texto"> Miel Gourmet </button>
                <button className="texto"> Miel Cosmética </button>

                
                
            
            </div>
            
            <CartWidget />



        </nav>
        
    )
} 

export default NavBar