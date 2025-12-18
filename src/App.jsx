import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

      ]
    },




  ]);




  return <RouterProvider router={router} />
}

