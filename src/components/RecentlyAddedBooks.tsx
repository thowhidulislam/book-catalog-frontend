import BookCard from "./BookCard";

const RecentlyAddedBooks = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 text-gray-600">
        Recently Added Books
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <BookCard />
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;
