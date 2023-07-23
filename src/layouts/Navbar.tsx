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
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    dispatch(setUser(user ? JSON.parse(user) : null));
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(
      setUser({
        email: null,
      })
    );
  };

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
              <li className="mr-2">
                <Button variant="link" asChild>
                  <Link to="/allBooks">All Books</Link>
                </Button>
              </li>
              <li className="mr-2">
                <Button variant="link" asChild>
                  <Link to="/add-new-book">Add New Book</Link>
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
                    {!user?.email && (
                      <>
                        <DropdownMenuItem>
                          <Link to="/login">Login</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to="/signup">Sign Up</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    {user?.email && (
                      <>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/wishlist">Wishlist</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/readinglist">Reading List</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="cursor-pointer"
                        >
                          Log out
                        </DropdownMenuItem>
                      </>
                    )}
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
