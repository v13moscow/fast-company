import React, { useState } from "react";
import User from "./user";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import PropTypes from "prop-types";

const Users = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { usersApp } = props;
  const count = usersApp.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userGrop = paginate(usersApp, currentPage, pageSize);

  return (
    <>
      {count > 0 && (
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
              {userGrop.map((user) => (
                <User
                  key={user._id}
                  onDelete={props.onDelete}
                  onToggBookMark={props.onToggBookMark}
                  {...user}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
Users.propTypes = {
  onToggBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  usersApp: PropTypes.array.isRequired
};
export default Users;
