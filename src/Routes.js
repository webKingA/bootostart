import Home from "./Frontend/Pages/Home/Home";
import Courses from "./Frontend/Pages/Courses/Courses";
import Comments from "./Frontend/Pages/Comments/Comments";

const AllRoutes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/comments", element: <Comments /> },
];

export default AllRoutes;