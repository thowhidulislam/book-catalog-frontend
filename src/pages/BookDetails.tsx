import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useGetSingleBookQuery } from "@/redux/features/Books/booksApi";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidAddToQueue } from "react-icons/bi";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  console.log("get single book", data);
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-2 container mb-5">
        <div className="md:sticky top-20 bottom-0 flex flex-col justify-center  items-center h-full w-full md:w-3/5">
          <div className="border p-4 rounded-lg w-full flex justify-center relative">
            <img
              src={data?.data?.image}
              alt="book image"
              className="max-h-96 max-w-96"
            />
            <div className="absolute top-1 right-2 bg-white border shadow-lg rounded-full p-2">
              <AiFillHeart className=" text-2xl cursor-pointer hover:text-red-500" />
            </div>
          </div>
          <div className="w-full flex gap-2 justify-center items-center text-gray-600 my-3">
            <Button className="w-full p-6 bg-[#FF9F00] rounded-none">
              <p className="text-2xl ">Edit</p>
            </Button>
            <Button className="w-full  p-6 rounded-none bg-[#FB641B]">
              <p className="text-2xl">Delete</p>
            </Button>
          </div>
        </div>

        <div className="w-full rounded p-3 ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{data?.data?.title}</h1>
            <BiSolidAddToQueue
              className="text-2xl cursor-pointer"
              title="Add to reading list"
            />
          </div>
          <h1 className="text-gray-600 my-3">by {data?.data?.author}</h1>
          <Separator />

          <p className="flex justify-between w-full md:w-2/4 py-2">
            <span className="w-2/4">Genre</span>{" "}
            <span className="w-2/4">{data?.data?.genre}</span>
          </p>
          <p className="flex justify-between w-full md:w-2/4 py-2">
            <span className="w-2/4">Published</span>{" "}
            <span className="w-2/4">{data?.data?.publicationDate}</span>
          </p>
          {/* reviews */}
          <div className="flex flex-col gap-3 border p-3 my-10">
            <h1 className="text-2xl font-bold">Reviews</h1>
            <div className="flex flex-col md:flex-row justify-between gap-2 my-4">
              <Textarea />
              <Button variant="outline">Submit</Button>
            </div>
            <div className="my-6 flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>hi..read this book. really enjoyed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
