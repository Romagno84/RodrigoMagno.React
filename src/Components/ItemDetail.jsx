const ItemDetail = ({item}) =>{

    return (
        <>
        <div className="ventanaDetalles">
        <h1 className="tituloDetalles">{item.nombre}</h1>
        <img src={item.imagen} alt="" className="imagenDetalles" />
        <h3 className="textoDetalles">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, saepe. In pariatur eveniet qui voluptas optio, numquam itaque quisquam molestias esse unde voluptatem, exercitationem officia vero earum, dignissimos dicta iure.</h3>
        <h3 className="precioDetalle">{item.precio}$</h3>
        </div>
        </>
    )
}

export default ItemDetail;