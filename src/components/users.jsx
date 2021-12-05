import React,{useState} from "react"
import api from "../api/"

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  
  const renderFrase = (number) => {
    let numeral = ''
    number === 2 || number === 3 || number === 4 ? numeral = 'человека' : numeral = 'человек'
    return <h2><span className="badge bg-primary bg-lg p-2">{number} {numeral} тусанет с тобой сегодня</span></h2>
  }
  const handleDelete = (id) => {
    setUsers(prevState=>prevState.filter(item =>item._id !== id))
  }

  const renderUsers = () => {
    let num = users.length  
    if(users.length === 0) return <h2><span className="badge bg-danger bg-lg p-2">Никто с тобой не тусанет</span></h2>  
    return users.length !== 0 
    && <div>
        {renderFrase(num)}
        <table className="table"> 
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>(   
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map(qual =>{
                  let classes ="badge m-1 bg-"
                  if(qual.color === "primary"){
                    return <span key={qual._id}
                    className={classes+='primary'}
                    >{qual.name}</span>
                  }if(qual.color === "secondary"){
                    return <span key={qual._id}
                    className={classes+='secondary'}
                    >{qual.name}</span>
                  }if(qual.color === "success"){
                    return <span key={qual._id}
                    className={classes+='success'}
                    >{qual.name}</span>
                  }if(qual.color === "danger"){
                    return <span key={qual._id}
                    className={classes+='danger'}
                    >{qual.name}</span>
                  }if(qual.color === "info"){
                    return <span key={qual._id}
                    className={classes+='info'}
                    >{qual.name}</span>
                  }if(qual.color === "dark"){
                    return <span key={qual._id}
                    className={classes+='dark'}
                    >{qual.name}</span>
                  }
                    console.log(qual.color);
                  })}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td><button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                      >delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  }

  return(
    <div>
      {renderUsers()}
    </div>
  ) 
}
export default Users;