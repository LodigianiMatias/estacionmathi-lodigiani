import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./itemList/items/Item"

const MarcasContainer = () => {

  const { marcaId } = useParams()
  const [marcas, setMarcas] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const marcasCollection = collection(db,"productosData")
      getDocs(marcasCollection).then((snapshot)=> {
        const resultado = snapshot.docs.map((doc) => doc.data())
        setMarcas(resultado.filter(d => d.marca == marcaId))
      })  
  }, [marcaId])
  
  return (
    <div>
      <h1 className="text-6xl font-bold text-black underline mt-2">{marcaId}</h1>
      {marcas.map(c => <Item key={c.id} productos={c}/>)}
    </div>
  )
}
export default MarcasContainer

