import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [products, SetProducts] = useState([])
    const [input, SetInput] = useState()
    
    useEffect(() => {
        
    }, [])
    
    
console.log(products)    

const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then(response => {
            return response.json()
        })
        .then(res => {
            SetProducts(res.results)
        })
        .catch(error => {
            console.log(error)
        })
}
    return (
        <>
            <h1>Buscador</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => SetInput(e.target.value)} />
                <button>BUSCAR</button>
            </form>
            <ul>
                {products.map(prod => {
                    return (
                        <li key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title}/>
                            <p>{prod.title}</p>
                            <p>{prod.price}</p>
                        </li>
                    )

                })}
            </ul>
        </>
    )
}

export default MercadoLibre