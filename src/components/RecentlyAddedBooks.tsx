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
    <section className="container mx-auto my-10">
      <h1 className="text-2xl font-bold my-7 text-gray-600">
        Recently Added Books
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {topTenRecentlyAddedBooks.map((book: IBook) => (
          <BookCard booksData={book} key={book._id} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;
