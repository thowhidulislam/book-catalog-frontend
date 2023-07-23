import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useGetBooksQuery } from "@/redux/features/Books/booksApi";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { genreNames, publicationYears } from "@/shared/common";
import { IBook } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYears, setSelectedYears] = useState<string[]>(() => {
    const storedYears = localStorage.getItem("selectedYears");
    return storedYears ? storedYears.split(",") : [];
  });

  const [selectedGenres, setSelectedGenres] = useState<string[]>(() => {
    const storedGenres = localStorage.getItem("selectedGenres");
    return storedGenres ? storedGenres.split(",") : [];
  });

  const { data, isLoading, isError } = useGetBooksQuery(
    {
      searchTerm,
      publicationDate: selectedYears.join(","),
      genre: selectedGenres.join(","),
    },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 40000,
    }
  );
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    dispatch(setUser(user ? JSON.parse(user) : null));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("selectedYears", selectedYears.join(","));
    localStorage.setItem("selectedGenres", selectedGenres.join(","));
  }, [selectedYears, selectedGenres]);

  const handlePublicationYear = (publicationYear: string) => {
    setSelectedYears((prevYears) => {
      if (prevYears.includes(publicationYear)) {
        return prevYears.filter((year) => year !== publicationYear);
      } else {
        return [...prevYears, publicationYear];
      }
    });
  };

  const handleGenre = (genre: string) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((nGenre) => nGenre !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-between items-center">
        {user?.email && (
          <Button asChild variant="outline">
            <Link to="/add-new-book">Add New</Link>
          </Button>
        )}
        <div className="flex justify-end items-center w-2/4">
          <Input
            placeholder="Search by author name, title, or genre"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Sheet>
            <SheetTrigger>
              <div className="border p-1 ml-3 rounded-lg">
                <RiFilter3Fill className="text-3xl cursor-pointer" />
              </div>
            </SheetTrigger>
            <SheetContent>
              <p className="text-xl font-bold mt-5 mb-1">Genre</p>
              <Separator />
              {genreNames.map((genreName) => (
                <div className="flex items-center gap-2 my-2" key={genreName}>
                  <Checkbox
                    id={genreName}
                    checked={selectedGenres.includes(genreName)}
                    onClick={() => handleGenre(genreName)}
                  />
                  <label
                    htmlFor={genreName}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {genreName}
                  </label>
                </div>
              ))}
              <p className="text-xl font-bold mt-5 mb-1">Publication Year</p>
              <Separator />
              {publicationYears.map((publicationYear) => (
                <div
                  className="flex items-center gap-2 my-2"
                  key={publicationYear}
                >
                  <Checkbox
                    id={publicationYear}
                    checked={selectedYears.includes(publicationYear)}
                    value={publicationYear}
                    onClick={() => handlePublicationYear(publicationYear)}
                  />
                  <label
                    htmlFor={publicationYear}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {publicationYear}
                  </label>
                </div>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 my-8">
        {data?.data.map((book: IBook) => (
          <BookCard booksData={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
