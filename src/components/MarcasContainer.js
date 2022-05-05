import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { marcasData } from "../data/marcasData"
import { productosData } from "../data/productosData"
import Item from "./Item"

const MarcasContainer = () => {

  const { marcaId } = useParams()
  const [marca, setMarca] = useState({})

  useEffect(() => {
      setMarca(marcasData.find(f => f.marca == marcaId))
  }, [marcaId])
  

  useEffect(() => {
    setMarca(marcasData.map(p => p.marca = (productosData.map(m => m.marca))))
  }, [])
  return (
    <div>
        <div className="text-6xl text-black underline m-10 font-bold">Nuestros Productos</div>
    </div>
  )
}
export default MarcasContainer

