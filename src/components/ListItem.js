import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div `
  background-color: ${props => props.complete ? 'green' : 'red'};
`

const ListItem = ({element}) => {
    return (
      <>
      <StyledDiv>
      <span>
    <ul><h4>{element.description}&nbsp;&nbsp;
    Completed  
      {element.complete === true ? 
      (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}
      </h4></ul>
      </span>
      </StyledDiv>
      <br />
  </>
    )
  }
  
  export default ListItem