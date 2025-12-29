import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import CocktailDrink from "./features/drinks/CocktailDrink";
import Drink from "./features/drinks/Drink";
import Some from "./features/home/Some";

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
          path: '/some',
          element: <Some />
        },
        {
          path: '/cocktail',
          element: <CocktailDrink />
        },
        {
          path: '/drink/:id',
          element: <Drink />
        }
      ]
    },




  ]);




  return <RouterProvider router={router} />
}

