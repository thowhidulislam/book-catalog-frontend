import {
  useDeleteWishlistBookMutation,
  useGetWishlistBooksQuery,
  usePostWishlistMutation,
} from "@/redux/features/wishlist/wishlistApi";
import {
  addBookToWishlist,
  removeBookFromWishlist,
} from "@/redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import notify from "@/shared/notify";
import { IBook, IUser } from "@/types/globalTypes";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

type IBookCard = {
  booksData: IBook;
};

type IWishlistBook = {
  _id: string | number;
  book: IBook;
  user: IUser;
};

const BookCard = ({ booksData }: IBookCard) => {
  const { data } = useGetWishlistBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 40000,
  });

  const [isAvailable, setIsAvailable] = useState<number[]>([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const [postWishlist] = usePostWishlistMutation();
  const [deleteWishlistBook] = useDeleteWishlistBookMutation();
  const dispatch = useAppDispatch();

  const handleWishlist = async () => {
    try {
      if (isInWishlist) {
        await deleteWishlistBook({ id: booksData._id }).unwrap();
        dispatch(removeBookFromWishlist({ _id: booksData._id }));
        notify("Book is removed from wishlist", "error");
      } else {
        // If the book is not in the wishlist, perform POST request
        await postWishlist({ id: booksData?._id }).unwrap();
        dispatch(addBookToWishlist({ _id: booksData._id }));
        notify("Book is added to wishlist", "success");
      }

      // Toggle the isInWishlist state after the request is successful
      setIsInWishlist((prevIsInWishlist) => !prevIsInWishlist);
    } catch (error: SerializedError | FetchBaseQueryError | any) {
      notify(error?.data?.message, "error");
    }
  };

  useEffect(() => {
    if (data?.data.length > 0) {
      const isBookInWishlist = data?.data?.find(
        (book: IWishlistBook) => book?.book._id === booksData?._id
      );

      isBookInWishlist && setIsInWishlist(isBookInWishlist?.book._id);
      isBookInWishlist &&
        isAvailable.filter(
          (id) =>
            id === isBookInWishlist?.book._id &&
            setIsAvailable([...isAvailable, isBookInWishlist?.book._id])
        );
    }
  }, [data?.data, booksData?._id, dispatch, isAvailable]);

  return (
    <div>
      <div className="h-[460px] flex flex-col border text-sm rounded-lg shadow-md overflow-hidden hover:scale-[102%] transition-all">
        <Link to={`/${booksData?.title}/${booksData?._id}`}>
          <img
            src={booksData?.image}
            alt="book image"
            className="w-full max-h-80 object-fill"
          />
        </Link>
        <div className="p-2 text-gray-600">
          <div className="flex justify-between items-center">
            <Link to={`/${booksData?.title}/${booksData?._id}`}>
              <h1 className="text-xl font-bold ">{booksData?.title}</h1>
            </Link>
            <AiFillHeart
              className={`text-2xl cursor-pointer ${
                isInWishlist ? "text-red-500" : ""
              }`}
              onClick={() => handleWishlist()}
            />
          </div>
          <p className="">
            <span className="font-bold">Author:</span> {booksData?.author}
          </p>
          <p className="">
            <span className="font-bold">Genre:</span> {booksData?.genre}
          </p>
          <p className="">
            <span className="font-bold">Published:</span>{" "}
            {booksData?.publicationDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
