import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";
import Page1 from "./pages/home/nested-pages/Page1";
import Page2 from "./pages/home/nested-pages/Page2";

//tailwind css // routing basic concept

// man path '/'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'page-1',
          element: <Page1 />
        },
        {
          path: 'page-2',
          element: <Page2 />
        }
      ]
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },

    {
      path: '*',
      element: <NotFound />

    }

  ]);




  return <RouterProvider router={router} />
}

