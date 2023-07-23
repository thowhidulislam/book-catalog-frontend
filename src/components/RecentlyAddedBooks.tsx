import { useGetBooksQuery } from "@/redux/features/Books/booksApi";
import { IBook } from "@/types/globalTypes";
import BookCard from "./BookCard";

const RecentlyAddedBooks = () => {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });

  const sortedData = (data?.data || [])
    .slice()
    .sort(
      (a: { createdAt: number }, b: { createdAt: number }) =>
        b.createdAt - a.createdAt
    );
  const topTenRecentlyAddedBooks = sortedData.slice(-10).reverse();
  return (
    <section className="container mx-auto px-8 py-10">
      <h1 className="text-2xl font-bold my-7 text-gray-600">
        Recently Added Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
        {topTenRecentlyAddedBooks.map((book: IBook) => (
          <BookCard booksData={book} key={book._id} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;
