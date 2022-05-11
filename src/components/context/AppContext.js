import { createContext, useContext } from "react"
import { productosData } from "../../data/productosData"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

    const [products, setProducts] = useState([productosData])
    

  return (
    <AppContext.Provider value={{products}}>
        {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider