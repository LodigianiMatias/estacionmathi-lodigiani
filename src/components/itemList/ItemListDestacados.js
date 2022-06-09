import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import Item from "./items/Item"

const ItemListDestacados = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        //getProductosList()
        const db = getFirestore();
    
        const itemsCollection = collection(db, "destacadosData")
    
        getDocs(itemsCollection).then((snapshot) => {
          setProductos(snapshot.docs.map((doc) => (doc.data())))
        })
    }, [])

  return (
    <div>
        {productos.map(c => <Item key={c.id} productos={c}/>)}
    </div>
  )
}
export default ItemListDestacados