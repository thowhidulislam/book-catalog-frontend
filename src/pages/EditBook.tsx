import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/features/Books/booksApi";
import { genreNames } from "@/shared/common";
import notify from "@/shared/notify";
import { IBook } from "@/types/globalTypes";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import addBookImage from "../assets/addBook.svg";

const EditBook = () => {
  const location = useLocation();
  const { data } = useGetSingleBookQuery(location.state.id);
  const [booksData, setBooksData] = useState<IBook>({
    title: data?.data?.title,
    author: data?.data?.author,
    genre: data?.data?.genre,
    publicationDate: data?.data?.publicationDate,
    image: data?.data?.image,
  });

  const [updateBook] = useUpdateBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await updateBook({ id: location.state.id, data: booksData }).unwrap();

      setBooksData({
        title: "",
        author: "",
        genre: "",
        publicationDate: "",
        image: "",
      });
      notify("Book is updated successfully", "success");
    } catch (error: SerializedError | FetchBaseQueryError | any) {
      notify(error?.data?.message, "error");
    }
  };

  return (
    <section>
      <div
        className={`h-calc(100vh - 4rem) flex flex-col md:flex-row relative `}
      >
        <div className="w-full md:w-2/4  bg-gray-200">
          <img
            src={addBookImage}
            alt="add book image"
            className="w-full  object-cover"
          />
        </div>
        <div className="w-full md:w-2/4 flex flex-col justify-center items-center px-3 md:px-0">
          <div className="w-full md:w-2/4 text-center">
            <h1 className="text-2xl font-bold text-gray-600 my-3 md:mb-3">
              Edit Book Information
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Fill up the form with new information. You can change the book
              title, author name, genre, publication year, and image.
            </p>
          </div>
          <form className="w-full md:w-2/4" onSubmit={handleSubmit}>
            <Input
              className="mb-3"
              placeholder="Book title"
              type="text"
              defaultValue={booksData?.title}
              onChange={(e) =>
                setBooksData({
                  ...booksData,
                  title: e.target.value,
                })
              }
            />
            <Input
              className="mb-3"
              placeholder="Name of the author"
              type="text"
              defaultValue={booksData?.author}
              onChange={(e) =>
                setBooksData({
                  ...booksData,
                  author: e.target.value,
                })
              }
            />

            <select
              className="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[180px] text-[#8894A6]"
              defaultValue={booksData?.genre}
              onChange={(e) =>
                setBooksData({ ...booksData, genre: e.target.value })
              }
            >
              {genreNames.map((genreName) => (
                <option
                  value={genreName}
                  key={genreName}
                  className="text-[#8894A6]"
                >
                  {genreName}
                </option>
              ))}
            </select>

            <Input
              className="my-3"
              placeholder="Publication year"
              type="text"
              defaultValue={booksData?.publicationDate}
              onChange={(e) =>
                setBooksData({
                  ...booksData,
                  publicationDate: e.target.value,
                })
              }
            />
            <Input
              className="my-3"
              placeholder="Image URL"
              type="text"
              defaultValue={booksData?.image}
              onChange={(e) =>
                setBooksData({
                  ...booksData,
                  image: e.target.value,
                })
              }
            />
            <Button className="text-gray-200 my-8 w-full" type="submit">
              Update Book Information
            </Button>
            <p className="text-sm text-gray-500 pb-5 md:pb-3">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditBook;
