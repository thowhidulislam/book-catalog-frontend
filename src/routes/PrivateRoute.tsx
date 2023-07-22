import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
