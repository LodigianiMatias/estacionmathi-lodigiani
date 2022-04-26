const CardProduct = () => {

    console.log(window.innerWidth);

    return (
        <div className="w-full relative" style={{
            left:((window.innerWidth/2)-200)+'px'
        }}>
            <div className="card card-normal image-full card-compact w-96 bg-base-100 shadow-xl relative">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Descripcion del producto</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardProduct