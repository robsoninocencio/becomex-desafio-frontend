import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface User {
  name: string;
  alpha3Code: string;
  capital?: string;
  region: string;
  population: number;
  timezones?: (string)[] | null;
  currencies?: CurrenciesEntity;
  languages?: (LanguagesEntity)[] | null;
  borders?: (null)[] | null;
  regionalBlocs?: (null)[] | null;
}
interface CurrenciesEntity {
  code: string;
  name: string;
  symbol: string;
}
interface LanguagesEntity {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}


const UserDetails: React.FC = () => {
  const { name } = useParams();
  const { data } = useFetch<User[]> (`name/${name}`);
  // console.log('JSON.stringify(data) = '+JSON.stringify(data));

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <>
      {data.map(user => (
        <p key={user.alpha3Code}>
            País = {user.name}<br />
            População = {user.population} <br />
            TimeZone = {user.timezones} <br />
            Capital = {user.capital} <br />
            Moedas = {JSON.stringify(user.currencies)} <br />
            Linguas = {JSON.stringify(user.languages)} <br />
            Fronteiras = {JSON.stringify(user.borders)} <br />
            Blocos Econômicos = {JSON.stringify(user.regionalBlocs)}
        </p>
      ))}
    </>
  );
}

export default UserDetails;
