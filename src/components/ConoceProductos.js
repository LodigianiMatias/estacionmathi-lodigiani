const ConoceProductos = (props) => {

  const nombre = props.conocer


  return (
    <div>
      <div className="text-white bg-[url('https://i.ibb.co/VpGwVbW/abstract-background-black-multicolor-wallpaper-preview.jpg')]  w-full flex justify-center text-6xl pt-10 pb-10 font-bold">{nombre}</div>
    </div>
  )
}
export default ConoceProductos