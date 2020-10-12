import useSWR from 'swr'
import api from '../services/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);
    // console.log('useFetch response.data = '+ JSON.stringify(response.data));
    return response.data;
  })

  return { data, error, mutate }
}