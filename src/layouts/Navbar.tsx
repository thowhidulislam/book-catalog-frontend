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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const [navbar, setNavbar] = React.useState(false);
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
          {/* small devices */}
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 text-black-400 border border-black-400 rounded hover:text-black-500 hover:border-black-500"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-dark"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  text-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {navbar && (
            <div className="md:hidden absolute top-16 bg-gray-100 py-2 px-1 right-[17px]">
              <ul className="flex items-center">
                <li className="mr-2">
                  <Button variant="link" asChild>
                    <Link to="/allBooks">All Books</Link>
                  </Button>
                </li>
                {user?.email && (
                  <li className="mr-2">
                    <Button variant="link" asChild>
                      <Link to="/add-new-book">Add New Book</Link>
                    </Button>
                  </li>
                )}
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
          )}
          <div className={`hidden md:block `}>
            <ul className="flex items-center">
              <li className="mr-2">
                <Button variant="link" asChild>
                  <Link to="/allBooks">All Books</Link>
                </Button>
              </li>
              {user?.email && (
                <li className="mr-2">
                  <Button variant="link" asChild>
                    <Link to="/add-new-book">Add New Book</Link>
                  </Button>
                </li>
              )}
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
