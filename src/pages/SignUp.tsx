import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/redux/features/user/userApi";
import notify from "@/shared/notify";
import { useState } from "react";
import { Link } from "react-router-dom";
import signupImage from "../assets/signup.svg";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [createUser, { error }] = useCreateUserMutation();

  const handleCreateAccountSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await createUser(userData);
    !error && notify("Account is created successfully", "success");
    setUserData({ name: "", email: "", password: "" });
    error && notify("Account Creation Failed", "error");
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row md:min-h-screen relative">
        <Button variant="outline" asChild className="absolute right-5 top-5">
          <Link to="/login">Login</Link>
        </Button>
        <div className="w-full md:w-2/4 md:h-screen bg-gray-200">
          <img
            src={signupImage}
            alt="signup"
            className="w-full h-full object-contain lg:object-cover"
          />
        </div>
        <div className="w-full md:w-2/4 md:h-screen flex flex-col justify-center items-center">
          <div className="w-full md:w-2/4 text-center my-3 md:my-0">
            <h1 className="text-2xl font-bold text-gray-600 mb-3">
              Create an account
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Enter your email address to create your account
            </p>
          </div>
          <form
            className="w-full md:w-2/4 px-3 md:px-0"
            onSubmit={handleCreateAccountSubmit}
          >
            <Input
              className="mb-3"
              placeholder="Name"
              type="text"
              value={userData.name}
              required
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <Input
              className="mb-3"
              placeholder="Email Address"
              type="email"
              value={userData.email}
              required
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <Input
              className="mb-3"
              placeholder="Enter your password"
              type="password"
              value={userData.password}
              required
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />

            <Button className="text-gray-200 my-8 w-full" type="submit">
              Create account
            </Button>
            <p className="text-sm text-gray-500 pb-5 md:pb-0">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
