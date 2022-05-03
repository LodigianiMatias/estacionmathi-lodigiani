import { useEffect, useState } from "react"
import ApiDetail from "./ApiDetail"

const ApiList = () => {

    const [planetas, setPlanetas] = useState([])

    useEffect(() => {
      getPlanetaDetail()
    }, [])

    const getPlanetaDetail = () => {
      const urlData = 'https://swapi.dev/api/planets'
      const promesaData = new Promise((resolve) => {
          setTimeout( () => {
            resolve(fetch(urlData))
          },2000)  
      })     

      .then(response => response.json())
      .then( data => {
        setPlanetas(data.results)
        })
    }
  return (
    <div>{planetas.map(p => <ApiDetail key={p.url} detalles={p}/>)}</div>
  )
}
export default ApiList