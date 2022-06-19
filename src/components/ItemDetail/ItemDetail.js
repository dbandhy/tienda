import { useState } from "react";


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


const ItemDetail = ({id, nombre, descripcion, img}) => {

    return (
        <>
            <h2>Detalle</h2>
            {id}
            {img}
            {nombre}
            {descripcion}
            <BotonContar onAdd={(count) => console.log(count)} />
            <InputContar onAdd={(count) => console.log(count)}  />
        </>
    )
}

export default ItemDetail