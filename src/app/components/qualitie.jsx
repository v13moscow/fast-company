import React from 'react'

const Qualitie = ({color,name,id}) => {
return(
  <span
    key={id}
    className={"bage m-1 bg-" + color}
  >
    {name}
  </span>
)
}
export default Qualitie