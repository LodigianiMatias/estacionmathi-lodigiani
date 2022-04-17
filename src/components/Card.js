const Card = ({children}) => {
  return (
    <div style={{border: 'solid 2px green'}}>
      <div>Empieza una Card</div>
      {children}
      <div>Termina una Card</div>
    </div>
  )
}
export default Card