import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import RootLayout from "./components/RootLayout";
import TodoForm from "./pages/todos/TodoForm";

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
          path: 'add-todo',
          element: <TodoForm />
        }

      ]
    },


    {
      path: '*',
      element: <NotFound />

    }

  ]);




  return <RouterProvider router={router} />
}

