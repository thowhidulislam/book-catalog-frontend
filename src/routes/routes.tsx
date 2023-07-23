import AddNewBook from "@/pages/AddNewBook";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Readinglist from "@/pages/Readinglist";
import SignUp from "@/pages/SignUp";
import Wishlist from "@/pages/Wishlist";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";

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
        path: "/edit-book",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/readinglist",
        element: <Readinglist />,
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
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
