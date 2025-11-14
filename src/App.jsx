import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout';
import Home from './features/home/Home';
import Login from './features/authentication/Login';
import Register from './features/authentication/Register';
import AdminPanel from './features/admin/AdminPanel';
import ProductAddForm from './features/admin/ProductAddForm';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Register />
        },
        {
          path: 'admin-panel',
          element: <AdminPanel />
        },
        {
          path: 'product-add',
          element: <ProductAddForm />

        }

      ]
    }

  ]);



  return <RouterProvider router={router} />
}
