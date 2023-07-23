## Bookshelf

#### Live link: https://bookshelf-frontend-thowhid.netlify.app

#### Frontend Github Repository Link: https://github.com/thowhidulislam/book-catalog-frontend

#### Backend Github Repository Link: https://github.com/thowhidulislam/book-catalog-server

#### Backend Live Link: https://bookshelf-server-nu.vercel.app


### Technology Stack:

---Frontend---

- Typescript 
- Redux
- React
- Tailwind CSS

---Backend---

- Express
- Mongoose

### Features 

- The landing page  have a header, a list of the top 10 recently added books and a footer. There are some open routes such as "All Books", "Sign In", and "Sign Up".

- Users can create new accounts with a unique email and password.

- Users can log in using their credentials. After a successful login, the login button would be replaced with a logout button in the navbar.


### All Books Page

- A list of books is fetched from an API using RTK Query and displayed the list of books. Each book have key information such as

  - Title
  - Author
  - Genre
  - Publication Date

- Implemented a search bar that allows users to search for books based on criteria such as title, author, or genre.

- Filtering options are provided to narrow down the book list based on genre & publication year.

- Implemented an "Add New" Button to navigate to the "add-new-book" page to add a new book. Also added "Add New Book" as a navigation menu for authenticated users.


### Add New Book Page

- Authenticated users can add a new book by filling out a form. After submitting the form, the user will be notified of the success or failure of the operation with a toast or other notification.

### Book Details Page

- When a user clicks on a book from the list, displays a detailed view of the book. The detailed view includes the following information:

  - Title
  - Author
  - Genre
  - Publication Date
  - Reviews

The reviews are displayed on the book details page.

#### Add two buttons to the book details page:

- Edit Button
- Delete Button

When a user clicks on the Edit Book button, they would be redirected to the edit-book page. When a user clicks on the Delete Book button, they would see a confirmation dialogue to confirm that they want to delete the book.

Authenticated users would be able to leave reviews for books. Provided a submit box for submitting a review.

### Edit Books Page:

- Authenticate users can edit a book using a form. The form would have current data when editing. After submitting the form, the user would be notified using a toast. If there is any issue, the user will also be notified.

- Implemented a wishlist feature where users can add books they want to read in the future. 

- Users can also create a list of books they are currently reading or plan to read soon. Provided options to mark books as finished reading.