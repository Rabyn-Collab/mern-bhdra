import React from 'react'
import { Button } from '../../components/ui/button.jsx'
import ProductList from './ProductList.jsx'
import { useNavigate } from 'react-router'

export default function Dashboard() {
  const nav = useNavigate();
  return (
    <div>

      <Button onClick={() => nav('/product-add')}>Add Product</Button>

      <ProductList />

    </div>
  )
}
