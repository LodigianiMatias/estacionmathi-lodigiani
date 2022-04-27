import Contador from "./Contador"
const Item = (props) => {

  const { id, producto, stock, precio, img } = props.productos

  return (
    <div data-aos="zoom-in" className="card  inline-block w-auto m-10 bg-base-100 shadow-xl">
      <figure><img src={img} className="h-96" alt={producto} /></figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-2xl text-white">{producto}</h2>
        <p className="text-4xl text-white">${precio}</p>
        <div className="card-actions justify-center">
          <Contador/>
        </div>
      </div>
    </div>
  )
}
export default Item