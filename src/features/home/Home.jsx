import React from 'react'
import { useGetNewsQuery } from '../news/newsApi'
import { Button } from '../../components/ui/button';
import { EditIcon } from 'lucide-react';
import DeleteNews from '../news/DeleteNews';
import { useNavigate, useSearchParams } from 'react-router';
import { Input } from '../../components/ui/input';
import { Formik } from 'formik';

export default function Home() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { error, data, isLoading, refetch, isFetching } = useGetNewsQuery({
    search: searchParams.get('search') ?? ''
  });


  if (isLoading) return <h1>Loading....</h1>
  if (error) return <p className='text-red-500'>{error.data}</p>


  return (
    <div className='p-5'>


      <Formik
        initialValues={{
          search: ''
        }}
        onSubmit={(val) => {
          setSearchParams({ search: val.search });
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='flex mb-5 w-full max-w-sm items-center gap-2'>
            <Input
              value={values.search}
              onChange={handleChange}
              name='search'
              type="text" placeholder="search" />
            <Button type="submit" variant="outline">
              Search
            </Button>
          </form>
        )}
      </Formik>






      {data && data.map((news) => {
        return (
          <div key={news.id}>
            <h1>{news.title}</h1>
            <p>{news.detail}</p>
            <p className='text-gray-500'>Author: {news.author}</p>

            <div>

              <Button
                onClick={() => nav(`/edit/${news.id}`)}
                variant='ghost'>
                <EditIcon />
              </Button>
              <DeleteNews id={news.id} />
            </div>
          </div>
        )
      })}

    </div>
  )
}
