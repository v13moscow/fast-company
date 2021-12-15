import React, { useState, useEffect } from "react";
import User from "./user";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import api from "../api";
import PropTypes from "prop-types";

const Users = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const { usersApp } = props;
  const pageSize = 4;
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);
  const handleProfessionSelect = item => {
    setSelectedProf(item);
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const filteredProf = selectedProf
    ? usersApp.filter(item => item.profession === selectedProf)
    : usersApp;
  const count = filteredProf.length;
  const userGrop = paginate(filteredProf, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf();
  };
  return (
    <div className="d-flex">
      {professions &&
      <div className="d-flex flex-column flex-shrink-0 p-3">
        <GroupList
          selectedItem={selectedProf}
          items={professions}
          onItemSelect={handleProfessionSelect}
        />
        <button
          className="btn btn-secondary mt-2"
          onClick={clearFilter}
        >Сброс фильтрации</button>
      </div>
      }
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        {count > 0 && (
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
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};
Users.propTypes = {
  onToggBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  usersApp: PropTypes.array.isRequired
};
export default Users;
