import { useState } from "react";
import { useContext } from "react";
import CartContexto, { cartContexto } from "../../context/CartContext"

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


const ItemDetail = ({ id, nombre, precio, descripcion, img}) => {
    const { addItem } = useContext(CartContexto)
    
//    console.log(setCart)
    const handleonAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${nombre} `)
//    
   addItem ({id, precio, nombre, quantity })
}
    return (
        <article>
             <h2>Detalle</h2>
                <h3>{id}</h3>    
                <picture> <img src={img} alt={nombre}/> </picture>   
                <p>{nombre}</p>    
                <p>{descripcion}</p>    
                <BotonContar onAdd={(count) => console.log(count)} />
                <InputContar onAdd={(count) => console.log(count)}  />
        </article>
    )
}

export default ItemDetail