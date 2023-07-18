import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container top fixed z-10 h-16 w-full backdrop-blur-lg">
      <div className="h-full w-full bg-white/60">
        <div className="mx-auto flex h-full w-full items-center justify-between">
          <div>
            <Link to="/">
              <h1 className="text-2xl font-bold">BOOKSHELF</h1>
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mr-5">
                <Button variant="link" asChild>
                  <Link to="/allBooks">All Books</Link>
                </Button>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/sign">Sign Up</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
