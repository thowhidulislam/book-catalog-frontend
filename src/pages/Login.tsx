import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import loginImage from "../assets/login.svg";

const Login = () => {
  return (
    <section>
      <div className="flex min-h-screen relative">
        <Button variant="outline" asChild className="absolute right-5 top-5">
          <Link to="/signup">Sign up</Link>
        </Button>
        <div className="w-2/4 h-screen bg-gray-200">
          <img
            src={loginImage}
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/4 h-screen flex flex-col justify-center items-center">
          <div className="w-2/4 text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-3">
              Login to your account
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Enter your email address below
            </p>
          </div>
          <div className="w-2/4">
            <Input className="mb-3" placeholder="Email Address" type="email" />
            <Input
              className=""
              placeholder="Enter your password"
              type="password"
            />
            <Button asChild className="text-gray-200 my-8 w-full">
              <Link to="/home">Login to your account</Link>
            </Button>
            <p className="text-sm text-gray-500">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
