import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddBookMutation } from "@/redux/features/Books/booksApi";
import { genreNames } from "@/shared/common";
import notify from "@/shared/notify";
import { IBook } from "@/types/globalTypes";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useState } from "react";
import addBookImage from "../assets/addBook.svg";

const AddNewBook = () => {
  const [booksData, setBooksData] = useState<IBook>({
    title: "",
    author: "",
    genre: genreNames[0],
    publicationDate: "",
    image: "",
  });

  const [addBook] = useAddBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await addBook(booksData).unwrap();
      // addBook({
      //   title: "the alchemist233",
      //   author: "paulo coelho",
      //   genre: "fiction",
      //   publicationDate: "1988",
      //   image: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL.jpg",
      // });
      setBooksData({
        title: "",
        author: "",
        genre: "",
        publicationDate: "",
        image: "",
      });
      notify("Book is added successfully", "success");
    } catch (error: SerializedError | FetchBaseQueryError | any) {
      notify(error?.data?.message, "error");
    }
  };

  console.log("booksData", booksData);

  return (
    <section>
      <div className={`md:h-screen flex flex-col md:flex-row relative `}>
        <div className="w-full md:w-2/4 bg-gray-200">
          <img
            src={addBookImage}
            alt="add book image"
            className="w-full  object-cover"
          />
        </div>
        <div className="w-full md:w-2/4 flex flex-col justify-center items-center px-3 md:px-0">
          <div className="w-full md:w-2/4 text-center">
            <h1 className="text-2xl font-bold text-gray-600 my-3 md:mb-3">
              Add New Book
            </h1>
            <p className="text-sm text-gray-500 mb-6 px-3 md:px-0">
              Enter your book information to add the book in the website
            </p>
          </div>
          <form className="w-full lg:w-2/4 md:px-3" onSubmit={handleSubmit}>
            <Input
              className="mb-3"
              placeholder="Book title"
              type="text"
              value={booksData?.title}
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
              value={booksData?.author}
              onChange={(e) =>
                setBooksData({
                  ...booksData,
                  author: e.target.value,
                })
              }
            />

            <select
              className="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[180px] text-[#8894A6]"
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
              value={booksData?.publicationDate}
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
              value={booksData?.image}
              onChange={(e) =>
                setBooksData({
                  ...booksData,
                  image: e.target.value,
                })
              }
            />
            <Button className="text-gray-200 my-8 w-full" type="submit">
              Submit
            </Button>
            <p className="text-sm text-gray-500 pb-5 md:pb-0">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewBook;
