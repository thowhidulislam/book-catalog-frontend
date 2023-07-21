import BookCard from "@/components/BookCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useGetBooksQuery } from "@/redux/features/Books/booksApi";
import { IBook } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYears, setSelectedYears] = useState<string[]>(() => {
    const storedYears = localStorage.getItem("selectedYears");
    return storedYears ? storedYears.split(",") : [];
  });

  const { data, isLoading, isError } = useGetBooksQuery(
    {
      searchTerm,
      publicationDate: selectedYears.join(","),
    },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 40000,
    }
  );

  useEffect(() => {
    localStorage.setItem("selectedYears", selectedYears.join(","));
  }, [selectedYears]);

  const handlePublicationYear = (publicationYear: string) => {
    setSelectedYears((prevYears) => {
      if (prevYears.includes(publicationYear)) {
        return prevYears.filter((year) => year !== publicationYear);
      } else {
        return [...prevYears, publicationYear];
      }
    });
  };

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

  const publicationYears = [
    "1851-1900",
    "1901-1920",
    "1921-1940",
    "1941-1960",
    "1961-1980",
    "1981-2000",
    "2001-2020",
    "2021-2040",
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
            <div className="border p-1 ml-3 rounded-lg">
              <RiFilter3Fill className="text-3xl cursor-pointer" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <p className="text-xl font-bold mt-5 mb-1">Genre</p>
            <Separator />
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
            <p className="text-xl font-bold mt-5 mb-1">Publication Year</p>
            <Separator />
            {publicationYears.map((publicationYear) => (
              <div
                className="flex items-center gap-2 my-2"
                key={publicationYear}
                onClick={() => handlePublicationYear(publicationYear)}
              >
                <Checkbox
                  id="publishedDate"
                  checked={selectedYears.includes(publicationYear)}
                />
                <label
                  htmlFor="publishedDate"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {publicationYear}
                </label>
              </div>
            ))}
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
