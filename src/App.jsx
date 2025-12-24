import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import CocktailDrink from "./features/drinks/CocktailDrink";

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
        }
      ]
    },




  ]);




  return <RouterProvider router={router} />
}

