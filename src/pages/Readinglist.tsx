import {
  useGetReadingListQuery,
  useUpdateReadingListMutation,
} from "@/redux/features/readinglist/readinglistApi";
import notify from "@/shared/notify";
import { IBook, IUser } from "@/types/globalTypes";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { IoMdDoneAll } from "react-icons/io";

type IWishlistBook = {
  _id: string | number;
  isReading: boolean;
  book: IBook;
  user: IUser;
};

const Readinglist = () => {
  const { data, isLoading, isError } = useGetReadingListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });

  const [updateReadingList, { data: updatedData }] =
    useUpdateReadingListMutation();

  const tableHeaders = [
    "Book Name",
    "Author",
    "Genre",
    "Published Year",
    "Status",
  ];

  const handleMarkAsRead = async (id: string | undefined) => {
    try {
      await updateReadingList({ id: id }).unwrap();
      notify("Book is marked as read", "success");
    } catch (error: SerializedError | FetchBaseQueryError | any) {
      notify(error?.data?.message || error?.message, "error");
    }
  };

  return (
    <section className="container mx-auto px-8 py-8 overflow-auto">
      <h1 className="text-2xl font-bold text-gray-600">Reading List</h1>
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
              <td className="border p-2">{book?.book?.title}</td>
              <td className="border p-2">{book?.book?.author}</td>
              <td className="border p-2">{book?.book?.genre}</td>
              <td className="border p-2">{book?.book?.publicationDate}</td>
              <td className="border">
                <div className="flex justify-center items-center">
                  <IoMdDoneAll
                    title="Mark as read"
                    className={`${
                      book?.isReading ? "text-green-500" : ""
                    } text-3xl cursor-pointer`}
                    onClick={() => handleMarkAsRead(book?.book?._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Readinglist;
