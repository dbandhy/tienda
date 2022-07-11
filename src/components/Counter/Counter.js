// import Button from "../Button/Button.js";
import { useState, useEffect } from "react";


const Counter = ({initial, stock, title, onAdd}) => {

   

    const [ count, setCount ] = useState(initial)
    const [ result, setResult] = useState(0)
 


    useEffect(() => {
        console.log("El componente fue montado")

        return () => {
            console.log("El componente va a desmontarse")
        }
    }, [])

    useEffect(() => {
        console.log("Se ejecuta con el render y la actualización")
    }, [count])

    useEffect(() => {
        setResult(count + 1)
    }, [count])
    
    const decrement = () => {
        
            setCount(prev => prev - 1)
                    
    }
    
    const increment = () => {
        if (count < stock) {
        setCount(count + 1)
        
        }
    }

    const reset = () => {
        setCount(initial)
    }


    return (
        <div>
            <h1>Proceso de compra {result}</h1>
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            
            <button onClick={() => onAdd()}>AGREGAR</button>
            <button onClick={increment}>+</button>
            
            <br></br>
            <button onClick={reset}>reset</button>
            

        </div>
    )
}

export default Counter