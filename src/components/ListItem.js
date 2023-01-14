const ListItem = ({element}) => {
    return (
      <div className = 'each'>
      <br/>
      <span>
    <ul><h4>{element.description}&nbsp;&nbsp;
    Completed  
      {element.complete === true ? 
      (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}</h4></ul>
      </span>
  </div>
    )
  }
  
  export default ListItem