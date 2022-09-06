import Home from "./Frontend/Pages/Home/Home";
import Courses from "./Frontend/Pages/Courses/Courses";
import Comments from "./Frontend/Pages/Comments/Comments";
import About from "./Frontend/Pages/About/About";
import Cart from "./Frontend/Pages/Cart/Cart";

const AllRoutes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/comments", element: <Comments /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
];

export default AllRoutes;