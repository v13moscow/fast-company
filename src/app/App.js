import React,{useState} from "react"
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

const App = () =>{
  let [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (id) => {
    setUsers(users.filter(user => user._id !== id))
  }
  const hendleToggBookMark = (id) => {

    const newToggBookMark = users.map(item => {
      if (item._id !== id) {
        return item
      }
      return {
        ...item,
        bookmark: !item.bookmark
      }
    })
    setUsers(newToggBookMark)
//console.log(id);
  }
return(
  
    <div>
      <SearchStatus 
        length={users.length}
      />
      <Users 
        usersApp={users}
        onDelete={handleDelete}
        onToggBookMark={hendleToggBookMark}
      />
    </div>

)

}

export default App
