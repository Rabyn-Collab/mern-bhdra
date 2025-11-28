import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import RootLayout from "./components/RootLayout";
import MealList from "./pages/meals/MealList";
import Meal from "./pages/meals/Meal";

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
          path: 'meal/:id',
          element: <Meal />
        },
        {
          path: 'meal-list',
          element: <MealList />
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

