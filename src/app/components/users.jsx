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
              name={user.name}
              qualities={user.qualities}
              profession={user.profession}
              completedMeetings={user.completedMeetings}
              rate={user.rate}
              _id={user._id}
              onDelete={props.onDelete}
              onToggBookMark={props.onToggBookMark}
              
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