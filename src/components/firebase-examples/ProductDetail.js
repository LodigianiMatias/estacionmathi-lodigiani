import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

const ProductDetail = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
      const db = getFirestore()

      const iphone = doc(db, 'items', 'zqfyjzCCKFtbuEyvgy0W')
      getDoc( iphone ).then( res => {
          if (res.exists()) {
            // console.log(res);
            // console.log(res.id);
            // console.log(res.data());
            setItem(res.data());
          }
      })
    }, [])
    
  return (
    <>
        <div>ProductDetail</div>
        <div>{item.Producto}</div>
        <div>ProductDetail</div>
    </>

  )
}
export default ProductDetail