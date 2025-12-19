import React from 'react'
import { useGetNewsQuery, useLazyGetNewsQuery } from '../news/newsApi'
import { Button } from '../../components/ui/button';
import { Spinner } from '../../components/ui/spinner';

export default function Home() {

  // const [getData, { isLoading, error, data, isFetching }] = useLazyGetNewsQuery();



  const { error, data, isLoading, refetch, isFetching } = useGetNewsQuery();


  if (isLoading) return <h1>Loading....</h1>
  if (error) return <p className='text-red-500'>{error.data}</p>


  return (
    <div className='p-5'>
      {/* <Button onClick={() => getData()}>Get Data</Button> */}
      <Button disabled={isFetching} onClick={refetch}>
        {isFetching && <Spinner />}
        Refetch</Button>
      {data && data.map((news) => {
        return (
          <div key={news.id}>
            <h1>{news.title}</h1>
            <p>{news.detail}</p>
          </div>
        )
      })}

    </div>
  )
}
