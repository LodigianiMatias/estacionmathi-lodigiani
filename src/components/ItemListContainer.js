const ItemListContainer = ({producto,precio}) => {
  return (
    <div>
      <div className="text-black text-2xl">{producto}</div>
      <div className="text-blue text-2xl">{precio}</div>

    </div>
  )
}
export default ItemListContainer