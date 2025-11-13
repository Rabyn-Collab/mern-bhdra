import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>This is Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum, quia dolor incidunt explicabo porro! Illo, delectus officiis dolores natus temporibus nihil tempore reprehenderit cupiditate mollitia, nobis deserunt repudiandae similique.</p>
      <NavLink to={'/page-1'}>Page 1</NavLink>
      <NavLink to={'/page-2'}>Page 2</NavLink>
      <Outlet />
    </div>
  )
}
