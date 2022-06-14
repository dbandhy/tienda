const ItemDetail = ({id, nombre, descripcion, img}) => {

    return (
        <>
            <h2>Detalle</h2>
            {id}
            {img}
            {nombre}
            {descripcion}
        </>
    )
}

export default ItemDetail