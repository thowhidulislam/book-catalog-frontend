import AddNewBook from "@/pages/AddNewBook";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/:id/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
