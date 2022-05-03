const ApiDetail = ({detalles}) => {
    return (
      <div style={{border:'solid 2px black'}} >
        <strong>Nombre completo: {detalles.name}</strong>
        <div>Diametro:{detalles.diameter}</div>
        <div>Terreno: {detalles.terrain}</div>
        <div>Poblacion: {detalles.population}</div>
      </div>
    )
  }
  export default ApiDetail