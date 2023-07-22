import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  const [addBook, { isLoading }] = useAddBookMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook(booksData);
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
  };

  console.log("books data", booksData);
  const handleGenreChange = (selectedGenre: string) => {
    setBooksData({
      ...booksData,
      genre: selectedGenre,
    });
  };
  console.log("books data", booksData);

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
