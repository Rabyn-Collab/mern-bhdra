import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import AddForm from "./features/news/AddForm";
import EditPage from "./features/news/EditPage";


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
          path: '/add-form',
          element: <AddForm />
        },
        {
          path: '/edit/:id',
          element: <EditPage />
        }

      ]
    },




  ]);




  return <RouterProvider router={router} />
}

