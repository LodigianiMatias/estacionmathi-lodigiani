import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Contador from "../Contador"


const ItemListUnico = () => {
  const { productoId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db,"productosData")
    getDocs(itemsCollection).then((snapshot) => {
      snapshot.docs.map((doc) => {
        if(doc.data().producto == productoId) {
          setProduct(doc.data())
        }
      })
    })
  }, [productoId])


  return (
    <div className="pb-14">
      <div id='tabla-principal' className="relative top-10 flex justify-center">
        <table id='renglon-tabla'>
          <tbody>
            <tr >
              <td className="bg-green-200 rounded-xl">
                <div data-aos="fade-right">
                  <div data-aos="zoom-in" className="card  inline-block w-auto  bg-base-100 shadow-xl">
                    <figure><img src={product.img} className="h-96" alt="imagen" /></figure>
                    <div className="card-body bg-slate-800">
                      <span className="card-title justify-center text-2xl text-white w-2/4 left-1/4 right-1/4 relative">{product.producto} {product.marca}</span>
                      <span className="text-4xl text-white">${product.precio}</span>
                      <div className="card-actions justify-center">
                        <Contador/>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td id='celda-carousel' className="max-w-screen-sm bg-green-300">
              <div data-aos="fade-right">
              <h2 className='font-bold relative max-w-screen-sm text-3xl w-2/4 left-1/4 right-1/4'> {product.descripcion} </h2>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ItemListUnico