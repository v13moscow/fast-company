import React,{useContext} from 'react'
import Context from '../../context'

const BookMark = (onToggBookMark, _id) => {
  const{ users } = useContext(Context)
  console.log(users[0]);
return(
  <div>
    <button onClick={()=>onToggBookMark(_id)}><i className="bi bi-bookmark"></i></button>
  </div>
)
}
export default BookMark

//{status, ...rest}