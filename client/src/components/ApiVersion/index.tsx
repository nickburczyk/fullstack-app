import { useQuery } from 'react-query'
import { API_URL, QueryKeys } from '../../api'

export const ApiVersion = () => {
  const { isLoading, error, data } = useQuery(QueryKeys.API_VERSION, () => (
    fetch(API_URL+'/')
      .then(res => res.json())
  ))

  if (isLoading) return <>Loading...</>
  if (error) return <>Error...</>

  return (
    <p>API Version: {data?.apiVersion}</p>
  )
}