import React from "react"
import User from "./user"


const Users = (props) => {

const {usersApp} = props

  return(
    <>
    {usersApp.length > 0 &&
    <div>
        <table className="table"> 
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
            </tr>
          </thead>
          <tbody>
            {usersApp.map((user) =>(   
              <User 
              key={user._id}
              onDelete={props.onDelete}
              onToggBookMark={props.onToggBookMark}
              {...user}
              />
            ))}
          </tbody>
        </table>
      </div>
}
    </>
  ) 
}
export default Users;