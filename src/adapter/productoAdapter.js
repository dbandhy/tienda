export const createAdapterProdFromFirebase = (doc) => {

    const data = doc.data()
    
    const productoFormateado = {
        id: doc.id, nombre: data.nombre , img: data.img, precio: data.precio, categoria: data.categoria, descripcion: data.descripcion
    }

    return productoFormateado
}