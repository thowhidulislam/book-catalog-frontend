import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "@/redux/features/Books/booksApi";
import { usePostReviewMutation } from "@/redux/features/review/reviewApi";
import notify from "@/shared/notify";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidAddToQueue } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const [review, setReview] = useState("");

  const [postReview] = usePostReviewMutation();

  const handleBookDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBook(id).unwrap();
          notify("Book is deleted successfully", "success");
          navigate("/allBooks");
        } catch (error: SerializedError | FetchBaseQueryError | any) {
          notify(error?.data?.message, "error");
        }
      }
    });
  };

  const handlePostReview = async () => {
    try {
      await postReview({ id: id, message: review }).unwrap();
      notify("Review is posted successfully", "success");
      setReview("");
    } catch (error: SerializedError | FetchBaseQueryError | any) {
      notify(error?.data?.message, "error");
    }
  };

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
            <div className="w-full">
              <Link
                to={"/edit-book"}
                state={{
                  id: data?.data?.id,
                }}
              >
                <Button className="w-full p-6 bg-[#FF9F00] rounded-none">
                  <p className="text-2xl ">Edit</p>
                </Button>
              </Link>
            </div>
            <div className="w-full">
              <Button
                className="w-full  p-6 rounded-none bg-[#FB641B]"
                onClick={() => handleBookDelete()}
              >
                <p className="text-2xl">Delete</p>
              </Button>
            </div>
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
              <Textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <Button variant="outline" onClick={() => handlePostReview()}>
                Submit
              </Button>
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
