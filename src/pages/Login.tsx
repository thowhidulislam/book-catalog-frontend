import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <section>
      <div className="flex min-h-screen">
        <div className="w-2/4 h-screen bg-gray-400"></div>
        <div className="w-2/4 h-screen flex flex-col justify-center items-center">
          <div className="w-2/4">
            <Label htmlFor="email">Your email address</Label>
            <Input
              className=""
              id="email"
              placeholder="Email Address"
              type="email"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
