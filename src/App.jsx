import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout.jsx";
import Login from "./features/auth/Login.jsx";
import Register from "./features/auth/Register.jsx";
import IsLogin from "./components/IsLogin.jsx";
import UserProfile from "./features/user/UserProfile.jsx";
import Dashboard from "./features/admin/Dashboard.jsx";
import ProductAddForm from "./features/admin/ProductAddForm.jsx";
import ProductEditForm from "./features/admin/ProductEditForm.jsx";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [

        {
          element: <IsLogin />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            }
          ]
        },
        {
          path: "admin-dashboard",
          element: <Dashboard />
        },
        {
          path: "product-add",
          element: <ProductAddForm />
        },
        {
          path: "product-edit/:id",
          element: <ProductEditForm />
        },

        {
          path: "profile",
          element: <UserProfile />
        }



      ]
    }
  ]);

  return <RouterProvider router={router} />
}
