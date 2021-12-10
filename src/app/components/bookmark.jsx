import React from 'react'

const BookMark = (props) => {
  const changeBookClass = (bookmark) => {
    return bookmark ? 'bi bi-bookmark-fill': 'bi bi-bookmark'
    }
return(
  <div>
    <button onClick={props.onToggle}><i className={changeBookClass(props.bookmark)}></i></button>
  </div>
)
}
export default BookMark
