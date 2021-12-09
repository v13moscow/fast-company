import React,{useState} from "react"
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import Context from '../context'
import api from './api'

const App = () =>{
  let [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (id) => {
    setUsers(users.filter(user => user._id !== id))
  }
  const hendleToggBookMark = (id) => {
console.log('id');
  }
return(
  <Context.Provider value={{users}}>
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
  </Context.Provider>
)

}

export default App
