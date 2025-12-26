import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import CocktailDrink from "./features/drinks/CocktailDrink";
import Drink from "./features/drinks/Drink";

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

