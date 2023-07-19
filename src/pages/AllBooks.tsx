import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { useGetBooksQuery } from "@/redux/features/Books/booksApi";
import { IBook } from "@/types/globalTypes";
import { RiFilter3Fill } from "react-icons/ri";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });

  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-end items-center">
        <Input
          className="w-2/4"
          placeholder="Search by author name, title, or genre"
        />
        <div className="border p-1 ml-3 rounded-lg">
          <RiFilter3Fill className="text-3xl cursor-pointer" />
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
