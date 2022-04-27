import { useEffect, useState } from "react"
import { productosData } from "../data/productosData"
import Item from "./Item"

const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      getProductosList()
    },[])

    const getProductosList = () => {
      const promesa = new Promise((resolve) => {
        setTimeout( () => {
            resolve(productosData)
        },2000)
      })
    
    promesa
      .then( result => {
          setProductos(result);
      }) 
    }

  return (
    <div>
        {productos.map(c => <Item key={c.id} productos={c}/>)}
    </div>
  )
}
export default ItemList