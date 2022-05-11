import { useEffect, useState } from "react"
import { productosDestacadosData } from "../../data/productosDestacadosData"
import Item from "./items/Item"

const ItemListDestacados = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      getProductosList()
    },[])

    const getProductosList = () => {
      const promesa = new Promise((resolve) => {
        setTimeout( () => {
            resolve(productosDestacadosData)
        },1000)
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
export default ItemListDestacados