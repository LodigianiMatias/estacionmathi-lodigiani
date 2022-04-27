import ItemList from "./ItemList"

const ItemListContainer = ({producto,precio}) => {
  return (
    <div>
      <div className="text-blue text-2xl"><ItemList/></div>
    </div>
  )
}
export default ItemListContainer