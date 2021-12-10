import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {

  return(
    <>
    <tr key={props._id}>
                <td>{props.name}</td>
                <td>
                  {props.qualities.map((item) =>(
                    <Qualitie 
                    key={item._id}
                    color={item.color}
                    name={item.name}
                    />
                  ))}
                </td>
                <td>{props.profession.name}</td>
                <td>{props.completedMeetings}</td>
                <td>{props.rate}/5</td>
                <td><BookMark 
                bookmark={props.bookmark}
                onToggle={() => props.onToggBookMark(props._id)}//Передача id в Арр
                /></td>
                <td><button
                      className="btn btn-danger"
                      onClick={() => props.onDelete(props._id)}
                      >Delete</button>
                </td>
              </tr>
    </>
  )

}
export default User