import { AiFillHeart } from "react-icons/ai";

const BookCard = () => {
  return (
    <div>
      <div className="h-[430px] flex flex-col border text-sm rounded-lg shadow-md overflow-hidden hover:scale-[102%] transition-all">
        <img
          src="https://epqkkxb65h3.exactdn.com/wp-content/uploads/2023/02/m-2908.jpg"
          alt="book image"
          className="w-full h-[320px] object-fill"
        />
        <div className="p-2 text-gray-600">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold ">To kill a Mockingbird</h1>
            <AiFillHeart className=" text-2xl cursor-pointer hover:text-red-500" />
          </div>
          <p className="">
            <span className="font-bold">Author:</span> Harper Lee
          </p>
          <p className="">
            <span className="font-bold">Genre:</span> Fiction
          </p>
          <p className="">
            <span className="font-bold">Published:</span> 1960
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
