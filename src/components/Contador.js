import { useEffect, useState } from "react"

const Contador = () => {
  let stock = 10;

    console.log('Aqui hay un render del componente Contador')
    const [count, setCount] = useState(0)

    useEffect(() => {
      console.log('[useEffect]el componente se montó');
      return () => {
        console.log('se desmontará')
      }
    } , [])

    useEffect(() => {
        console.log('[useEffect]el estado cambió')
    } , [count])
   
    const addHandler = () => {
      if (count < stock) {
        console.log('se esta sumando')
        setCount(count + 1)
      }
    }

    const resHandler = () => {
      if (count > 0) {
        console.log('se esta restando')
      setCount(count - 1)
      }  
    }
    

  return (
      <>
      <button onClick={resHandler} className='border-1 border-black border-solid rounded-md text-3xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> - </button>
      <strong className="text-black text-2xl"> {count} </strong>
      <button onClick={addHandler} className='border-1 border-black border-solid rounded-md text-3xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> + </button>
      </>
  )
}
export default Contador