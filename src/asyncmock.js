const productos = [ 
    {
    id: "1",
    nombre: "miel multifloral de 1kg",
    precio: 1.50,
    categoria: "miel pura",
    img: "/images/multifloral.jpg",
    stock: 45,
    descripcion: "Miel de abeja en presentación tradicional"
    },

    {
        id: "2",
        nombre: "Miel con limón",
        precio: 25,
        categoria: "miel infusionada",
        img: "/images/limon.jpg",
        stock: 25,
        descripcion: "Miel con limón para bebidas calientes. No necesita azúcar al servirla"
    },

    {
        id: "3",
        nombre: "miel con frutos secos",
        precio: 30,
        categoria: "miel gourmet",
        img: "/images/frutoseco.jpg",
        stock: 25,
        descripcion: "condimento de miel mezclado con frutos secos"
    }

]

export const getProductos = () => {
    return new Promise ((resolve, reject ) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000) 
    })
}

export const getProductoByCategoria = (categoriaId) => {
    return new Promise ((resolve, reject ) => {
        setTimeout(() => {
            resolve(productos.filter(miel => miel.categoria === categoriaId))
        }, 500) 
    })
}


export const getProductoByID = (id) => {
    return new Promise ((resolve, reject ) => {
        setTimeout(() => {
            resolve(productos.find(miel => miel.id === id))
        }, 500) 
    })
}


