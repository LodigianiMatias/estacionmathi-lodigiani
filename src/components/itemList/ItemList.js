import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { productosData } from "../../data/productosData"
import Item from "./items/Item"

const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      //getProductosList()
      const db = getFirestore();

      const itemsCollection = collection(db,"productosData")
     
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => (doc.data())))
      })
    },[])
    
  return (
    <div>
        {productos.map(c => <Item key={c.id} productos={c}/>)}
    </div>
  )
}
export default ItemList