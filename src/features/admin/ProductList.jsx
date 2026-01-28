import React from 'react'
import { useGetProductsQuery } from '../product/productApi.js'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '../../components/ui/button.jsx'
import { EditIcon, TrashIcon } from 'lucide-react'
import { base } from '../../app/mainApi.js'
import DeleteProduct from './DeleteProduct.jsx'
import { useNavigate } from 'react-router'

const items = [
  {
    id: '1',
    name: 'Philip George',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'PG',
    email: 'philipgeorge20@gmail.com',
    location: 'Mumbai, India',
    status: 'Active',
    balance: '$10,696.00'
  },
  {
    id: '2',
    name: 'Tiana Curtis',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'TC',
    email: 'tiana12@yahoo.com',
    location: 'New York, US',
    status: 'applied',
    balance: '$0.00'
  },
  {
    id: '3',
    name: 'Jaylon Donin',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'JD',
    email: 'jaylon23d.@outlook.com',
    location: 'Washington, US',
    status: 'Active',
    balance: '$569.00'
  },
  {
    id: '4',
    name: 'Kim Yim',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'KY',
    email: 'kim96@gmail.com',
    location: 'Busan, South Korea',
    status: 'Inactive',
    balance: '-$506.90'
  }
]


export default function ProductList() {

  const { isLoading, error, data } = useGetProductsQuery();
  const nav = useNavigate();

  if (isLoading) return <p className='mt-2'>Loading...</p>
  if (error) return <p>{error.data?.message}</p>



  return (
    <div className='w-full mt-9'>
      <div className='[&>div]:rounded-sm [&>div]:border'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead>Name</TableHead>
              <TableHead>_id</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead className='text-right'>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ _id, image, price, stock, title }) => (
              <TableRow key={_id}>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <Avatar>
                      <AvatarImage src={`${base}/${image[0]}`} alt='AV' />
                      <AvatarFallback className='text-xs'>AV</AvatarFallback>
                    </Avatar>
                    <div className='font-medium'>{title}</div>
                  </div>
                </TableCell>
                <TableCell>{_id}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{stock}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => nav(`/product-edit/${_id}`)}
                    variant='ghost'> <EditIcon /></Button>
                </TableCell>
                <TableCell className='text-right'>

                  <DeleteProduct id={_id} />


                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  )
}

