const Saludo = ({name, edad}) => {
  return (
    <h1 className="text-4xl font-bold">
        Hola {name}!
        Tienes {edad} años
    </h1>
  )
}
export default Saludo
