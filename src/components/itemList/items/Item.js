import { Link, useParams } from "react-router-dom"

const Item = (props) => {

  const { id, producto, marca, stock, precio, img } = props.productos
  return (
    <Link to={`/productos/${producto}`}>
    <div data-aos="zoom-in" className="h-full card inline-block w-auto m-10 bg-base-100 shadow-2xl ">
      <figure><img src={img} className="h-60 w-full" alt={producto} /></figure>
      <div className="card-body h-32 relative flex bg-slate-800 hover:bg-sky-700 ">
        <span className="card-title absolute h-16 text-xl flex w-2/4 left-1/4 text-white link link-hover">{producto} {marca}</span>
      </div>
    </div>
    </Link>
  )
}
export default Item