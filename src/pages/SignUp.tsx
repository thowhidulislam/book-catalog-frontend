import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import signupImage from "../assets/signup.svg";

const SignUp = () => {
  return (
    <section>
      <section>
        <div className="flex min-h-screen relative">
          <Button variant="outline" asChild className="absolute right-5 top-5">
            <Link to="/login">Login</Link>
          </Button>
          <div className="w-2/4 h-screen bg-gray-200">
            <img
              src={signupImage}
              alt="signup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-2/4 h-screen flex flex-col justify-center items-center">
            <div className="w-2/4 text-center">
              <h1 className="text-2xl font-bold text-gray-600 mb-3">
                Create an account
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Enter your email address to create your account
              </p>
            </div>
            <div className="w-2/4">
              <Input
                className="mb-3"
                placeholder="Email Address"
                type="email"
              />
              <Input
                className="mb-3"
                placeholder="Enter your password"
                type="password"
              />
              <Input
                className=""
                placeholder="Confirm your password"
                type="password"
              />
              <Button asChild className="text-gray-200 my-8 w-full">
                <Link to="/home">Create account</Link>
              </Button>
              <p className="text-sm text-gray-500">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
