import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { marcasData } from "../data/marcasData"
import { productosData } from "../data/productosData"
import Item from "./itemList/items/Item"

const MarcasContainer = () => {

  const { marcaId } = useParams()
  const [marcaFind, setMarcaFind] = useState([])

  useEffect(() => {
    setearMarcas()
  }, [marcaId])

  const setearMarcas = () => {
    const promesa = new Promise((resolve) => {
      resolve(productosData)
    }) 

    promesa
      .then(m => {
        const result = m.filter(a => {
          if(a.marca == marcaId) {
            return(a)
          } 
        }) 
        setMarcaFind(result)
      })
  }
  
  return (
    <div>
      <h1 className="text-6xl font-bold text-black underline mt-2">{marcaId}</h1>
      {marcaFind.map(c => <Item key={c.id} productos={c}/>)}
    </div>
  )
}
export default MarcasContainer

