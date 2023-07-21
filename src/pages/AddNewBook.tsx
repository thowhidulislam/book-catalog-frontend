import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddBookMutation } from "@/redux/features/Books/booksApi";
import { genreNames } from "@/shared/common";
import { IBook } from "@/types/globalTypes";
import { useState } from "react";
import addBookImage from "../assets/addBook.svg";

const AddNewBook = () => {
  const [booksData, setBooksData] = useState<IBook>({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    image: "",
  });

  console.log("books data", booksData);
  const [addBook, { isLoading }] = useAddBookMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook(booksData);
    setBooksData({
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
      image: "",
    });
  };

  return (
    <section>
      <section>
        <div className={`h-calc(100vh - 4rem) flex relative `}>
          <div className="w-2/4  bg-gray-200">
            <img
              src={addBookImage}
              alt="add book image"
              className="w-full  object-cover"
            />
          </div>
          <div className="w-2/4 flex flex-col justify-center items-center">
            <div className="w-2/4 text-center">
              <h1 className="text-2xl font-bold text-gray-600 mb-3">
                Add New Book
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Enter your book information to add the book in the website
              </p>
            </div>
            <form className="w-2/4" onSubmit={handleSubmit}>
              <Input
                className="mb-3"
                placeholder="Book title"
                type="text"
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
                onChange={(e) =>
                  setBooksData({
                    ...booksData,
                    author: e.target.value,
                  })
                }
              />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Genre" />
                </SelectTrigger>
                <SelectContent>
                  {genreNames.map((genreName) => (
                    <SelectItem
                      value={genreName}
                      key={genreName}
                      onClick={() =>
                        setBooksData({
                          ...booksData,
                          genre: genreName,
                        })
                      }
                    >
                      {genreName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                className="my-3"
                placeholder="Publication year"
                type="text"
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
                onChange={(e) =>
                  setBooksData({
                    ...booksData,
                    image: e.target.value,
                  })
                }
              />
              <Button className="text-gray-200 my-8 w-full" type="submit">
                Upload New Book
              </Button>
              <p className="text-sm text-gray-500">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AddNewBook;
