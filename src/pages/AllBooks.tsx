import BookCard from "@/components/BookCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useGetBooksQuery } from "@/redux/features/Books/booksApi";
import { IBook } from "@/types/globalTypes";
import { useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useGetBooksQuery(
    {
      searchTerm,
      // genre: "Fiction",
      // title: "To Kill a Mockingbird",
    },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 40000,
    }
  );

  const genreNames = [
    "Fiction",
    "Fantasy",
    "Romantic",
    "Thriller",
    "Adventure",
    "Crime",
    "Historical",
    "war",
    "Mystery",
  ];

  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-end items-center">
        <Input
          className="w-2/4"
          placeholder="Search by author name, title, or genre"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Sheet>
          <SheetTrigger>
            {" "}
            <div className="border p-1 ml-3 rounded-lg">
              <RiFilter3Fill className="text-3xl cursor-pointer" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <p className="text-xl font-bold my-3">Genre</p>
            {genreNames.map((genreName) => (
              <div className="flex items-center gap-2 my-2" key={genreName}>
                <Checkbox id="genre" />
                <label
                  htmlFor={genreName}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {genreName}
                </label>
              </div>
            ))}
            <p className="text-xl font-bold my-3">Publication Year</p>
            <div className="flex items-center gap-2">
              <Checkbox id="genre" />
              <label
                htmlFor="genre"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Publication
              </label>
            </div>
            <Checkbox />
          </SheetContent>
        </Sheet>
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
