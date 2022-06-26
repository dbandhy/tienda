
import { useContext , useState, Link } from "react";
import CartContexto from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount";

const InputContar = ({initial = 1, stock, onAdd}) => {
    const [ count, setCount ] = useState(initial)

    const handleChange = (e) => {
                    setCount(e.target.value)
        
    }

    return (
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button  onClick={() => onAdd(count)}> AGREGAR </button>
        </div>
    )

}

const BotonContar = ({initial = 0, stock, onAdd}) => {

   const [ count, setCount ] = useState(initial)

        const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>AGREGAR</button>
            <button onClick={increment}>+</button>
            
          {/*  <br></br>
            <button onClick={reset}>reset</button> */}
            

        </div>
    )
}


const ItemDetail = ({ id, nombre, precio, stock, descripcion, img}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContexto)
    
//    console.log(setCart)
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${nombre} `)
//    
       addItem ({id, precio, nombre, quantity })
       setQuantityAdded(quantity)
}
    return (
        <article>
             <h2>Detalle: {nombre}</h2>
                <h3>ID: {id}</h3>    
                <picture> Fuente: Hi Honey! <img src={img} alt={nombre}/> </picture>   
                    
                <h3>Producto: {descripcion}</h3>    
                <BotonContar onAdd={(count) => console.log(count)} />
                <InputContar onAdd={(count) => console.log(count)}  />
        
        <p>
            { quantityAdded === 0
                ? <ItemCount stock={stock} onAdd={handleOnAdd} />
                : <Link to='/cart' > Terminar compra </Link>
            }
        </p>
        </article>
    )
}

export default ItemDetail