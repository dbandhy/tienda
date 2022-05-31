// import Button from "../Button/Button.js";
import { useState } from "react";


const Counter = ({initial, stock, title}) => {

   

    const [ count, setCount ] = useState(initial)

    
    const decrement = () => {
        
            setCount(count + 1)
                    
    }
    
    const increment = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(initial)
    }
 //   let count = 0

  //  const increment = () => {
  //      count = count + 1
   // }

  //  const decrement = () => {
   //     count = count - 1
   // }

    
    
    //let count = 0

    //const increment = () => {
    //    count = count + 1
    //}

    //const decrement = ()  => {
    //    count = count - 1
    //}

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={reset}>RESET</button>

        </div>
    )
}

export default Counter