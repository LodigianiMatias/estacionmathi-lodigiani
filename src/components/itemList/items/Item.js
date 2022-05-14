import { Link, useParams } from "react-router-dom"

const Item = (props) => {

  const { id, producto, marca, stock, precio, img } = props.productos
  return (
    <Link to={`/productos/${producto}`}>
    <div data-aos="zoom-in" className="card  inline-block w-auto m-10 bg-base-100 shadow-xl hover:bg-sky-700">
      <figure><img src={img} className="h-80" alt={producto} /></figure>
      <div className="card-body h-28 relative flex bg-slate-800">
        <h2 className="card-title absolute text-2xl flex top-2 left-1/4 right-1/4 text-white">{producto} {marca}</h2>
      </div>
    </div>
    </Link>
  )
}
export default Item