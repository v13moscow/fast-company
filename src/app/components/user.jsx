import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>
          {props.qualities.map((item) => (
            <Qualitie key={item._id} color={item.color} name={item.name} id={item._id}/>
          ))}
        </td>
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate}/5</td>
        <td>
          <BookMark
            bookmark={props.bookmark}
            onToggle={() => props.onToggBookMark(props._id)}
          />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.onDelete(props._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
User.propTypes = {
  _id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggBookMark: PropTypes.func.isRequired,
  bookmark: PropTypes.bool,
  rate: PropTypes.number.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.object.isRequired,
  qualities: PropTypes.array.isRequired
};
export default User;
