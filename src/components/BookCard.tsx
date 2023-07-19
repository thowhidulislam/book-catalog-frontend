import { IBook } from "@/types/globalTypes";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

type IBookCard = {
  booksData: IBook;
};

const BookCard = ({ booksData }: IBookCard) => {
  return (
    <Link
      to={`/${booksData?.title}/${booksData?._id}`}
      className="flex flex-col"
    >
      <div>
        <div className="h-[460px] flex flex-col border text-sm rounded-lg shadow-md overflow-hidden hover:scale-[102%] transition-all">
          <img
            src={booksData?.image}
            alt="book image"
            className="w-full max-h-80 object-fill"
          />
          <div className="p-2 text-gray-600">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold ">{booksData?.title}</h1>
              <AiFillHeart className=" text-2xl cursor-pointer hover:text-red-500" />
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
    </Link>
  );
};

export default BookCard;
