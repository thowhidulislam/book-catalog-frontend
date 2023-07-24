import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifiedUser = localStorage.getItem("user");

    if (verifiedUser) {
      const parsedUser = JSON.parse(verifiedUser);

      dispatch(setUser(parsedUser));
    }
  }, [dispatch]);

  const { pathname } = useLocation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (user.email && !isLoading) {
    // User is authenticated, render the children (protected content)
    return children;
  } else {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/login" state={{ from: pathname }} />;
  }
};

export default PrivateRoute;
