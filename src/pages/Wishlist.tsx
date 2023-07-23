import { useGetWishlistBooksQuery } from "@/redux/features/wishlist/wishlistApi";
import { IBook, IUser } from "@/types/globalTypes";

type IWishlistBook = {
  _id: string | number;
  book: IBook;
  user: IUser;
};

const Wishlist = () => {
  const { data, isLoading, isError } = useGetWishlistBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });

  const tableHeaders = ["Book Name", "Author", "Genre", "Published Year"];
  return (
    <section className="container mx-auto px-8 py-8 overflow-auto">
      <h1 className="text-2xl font-bold text-gray-600">Wishlist</h1>
      <table className="my-3 border w-full text-center text-gray-600">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th className="border p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data.map((book: IWishlistBook) => (
            <tr key={book._id}>
              <td className="border p-2">{book.book.title}</td>
              <td className="border p-2">{book.book.author}</td>
              <td className="border p-2">{book.book.genre}</td>
              <td className="border p-2">{book.book.publicationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Wishlist;
