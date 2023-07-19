import BookCard from "@/components/BookCard";
import { useGetBooksQuery } from "@/redux/features/Books/booksApi";
import { IBook } from "@/types/globalTypes";

const AllBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 my-8">
        {data?.data.map((book: IBook) => (
          <BookCard booksData={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
