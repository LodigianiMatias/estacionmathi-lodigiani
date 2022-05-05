import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { marcasData } from "../data/marcasData"
import { productosData } from "../data/productosData"

const MarcasContainer = () => {

  const { marcaId } = useParams()
  const [marca, setMarca] = useState({})
  const [marcaFind, setMarcaFind] = useState([])

  useEffect(() => {
    setMarca(marcasData.find(f => f.marca == marcaId))

    productosData.map(m => {
      if(m.marca == marcaId) {
        setMarcaFind(m)
        console.log(m);
      } 
    }) 
  }, [marcaId])
  


  return (
    <div>
      <div className="text-6xl text-black underline m-10 font-bold">{marcaId}</div>
    </div>
  )
}
export default MarcasContainer

