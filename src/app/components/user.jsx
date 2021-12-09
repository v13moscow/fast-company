import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = ({ name,qualities,profession,completedMeetings,rate,_id,onDelete,onToggBookMark}) => {

  return(
    <>
    <tr key={_id}>
                <td>{name}</td>
                <td>
                  {qualities.map((item) =>(
                    <Qualitie 
                    key={item._id}
                    color={item.color}
                    name={item.name}
                    />
                  ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}/5</td>
                <td><BookMark 
                onToggBookMark={onToggBookMark}
                _id={_id}
                /></td>
                <td><button
                      className="btn btn-danger"
                      onClick={() => onDelete(_id)}
                      >Delete</button>
                </td>
              </tr>
    </>
  )

}
export default User