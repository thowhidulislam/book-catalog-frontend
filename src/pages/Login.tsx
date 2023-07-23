/* eslint-disable no-unsafe-optional-chaining */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginUserMutation } from "@/redux/features/user/userApi";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import notify from "@/shared/notify";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loginData, { data, error }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.user);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await loginData(userData).unwrap();
      dispatch(setUser({ email: userData.email }));
      navigate("/");
      notify("Logged in Successfully", "success");
    } catch (error: SerializedError | FetchBaseQueryError | any) {
      notify(error?.data?.message, "error");
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", JSON.stringify(data?.data?.accessToken));
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user?.email,
          accessToken: data?.data?.accessToken,
        })
      );
    }
  }, [data, user.email]);

  return (
    <section>
      <div className="flex flex-col md:flex-row min-h-screen relative">
        <Button variant="outline" asChild className="absolute right-5 top-5">
          <Link to="/signup">Sign up</Link>
        </Button>
        <div className="w-full md:w-2/4 md:h-screen bg-gray-200">
          <img
            src={loginImage}
            alt="login"
            className="w-full h-full object-contain lg:object-cover"
          />
        </div>
        <div className="w-full md:w-2/4 md:h-screen flex flex-col justify-center items-center">
          <div className="w-full md:w-2/4 my-3 md:my-0 text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-3">
              Login to your account
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Enter your email address below
            </p>
          </div>
          <form
            className="w-full md:w-2/4 px-3 md:px-0"
            onSubmit={handleLoginSubmit}
          >
            <Input
              className="mb-3"
              placeholder="Email Address"
              type="email"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
            <Input
              className=""
              placeholder="Enter your password"
              type="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <Button className="text-gray-200 my-8 w-full" type="submit">
              Login to your account
            </Button>
            <p className="text-sm text-gray-500 mb-5 md:mb-2">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
