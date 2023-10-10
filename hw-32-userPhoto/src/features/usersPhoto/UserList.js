import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './UserList.module.css';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul className={style["user-list"]}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link to={`/user/${user.id}/albums`}>Альбоми</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
