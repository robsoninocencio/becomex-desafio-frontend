import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface Paises {
  alpha3Code: string;
  name: string;
}

const UserList: React.FC = () => {
  const { data } = useFetch<Paises[]>('all');

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data.map(user => (
        <li key={user.alpha3Code}>
          <Link to={`/name/${user.name}`}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
