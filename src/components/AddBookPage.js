import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from './SearchBar.js';
import Buttons from "./Buttons.js";
import {db} from "../firebase-config.js";
import {collection, getDocs, addDoc} from "firebase/firestore";
import catPlay from './catPlay.jpg';



const AddBookPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [pickedBook, setPickedBook] = useState({ author: "", bookId: "", publishedDate: "", read: false, title: "" });
  const [booksInDB,setBooksInDB]= useState([]);

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
    return authors;
  };

  // ----------------------------------------------
     // create a reference to the collecton you want to use from the database
     const userCollectionRef = collection(db,"books");
  
     /**
      * ADDS ANY NEW USERS CREATED TO THE DATABASE
      * async again cause its dealing with the database
      */
     
  const AddBookToState = async (book, index) => {
    {console.log("booksInDB", booksInDB)}
    await setPickedBook(() => ({
      author: bookAuthors(book.volumeInfo.authors),
      bookId: book.id,
      publishedDate: book.volumeInfo.publishedDate,
      read: false,
      title: book.volumeInfo.title,
   }));
      AddBookToDB();
  }
     const AddBookToDB = async () => {
       // addDoc takes in 2 things - reference to collection and data
       let bookInInDB = false;
       console.log("OUTSIDE", bookInInDB);
       booksInDB.map((bookElem) => {
         if (pickedBook.bookId === bookElem.bookId ){
           console.log("IT IS IN---------------", bookInInDB);
          //  alert("IT IS IN THE GENERATOR");
           bookInInDB = true;
         }
       });
       console.log("LASRR", bookInInDB);
       if (bookInInDB === false) {
        await addDoc(userCollectionRef, {author: pickedBook.author, bookId: pickedBook.bookId,
          publishedDate: pickedBook.publishedDate, read: pickedBook.read, title: pickedBook.title});
          alert("ADDED THE BOOK TO THE GENERATOR");
       };
      //  await addDoc(userCollectionRef, {author: pickedBook.author, bookId: pickedBook.bookId,
      //    publishedDate: pickedBook.publishedDate, read: pickedBook.read, title: pickedBook.title});
      //  window.location.reload();
     };


     // Get books from database and put them in useState
     useEffect(() => {
      const getBooksInDB = async () => {
        const data = await getDocs(userCollectionRef);
        // console.log(data);
        setBooksInDB(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
        return () => {
          setBooksInDB({}); // This worked for me
        };
      };
  
      getBooksInDB();
  
    }, []);


  return (
    
    <div class="w-full p-1">
    <div class="m-auto p-10 ">
    <div class="flex flex-col w-full">
      <div class="grid h-20 rounded-box place-items-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-center text-primary-focus" > Add Books! </h1>
      </div> 
    </div>
    
    <section class="py-5">
      <form onSubmit={onSubmitHandler}>
        <label class="p-12">
          <SearchBar
            placeholder="Enter a book pls..."
            onChange={onInputChange}
          />
        </label>
      </form>
      <ul>
        {books.items.map((book, index) => {
          return (
            
<div class="flex flex-row w-full shadow ">
  <div class="grid flex-grow h-full w-50 place-items-center p-10">
    <li key={index}>
    <div>
      <img class=" rounded lg:mx-auto shadow "
      alt={`${book.volumeInfo.title} book`}
      src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
      width="100" height="100"
      />
      <div>
        <h1 class="text-center font-semibold text-xl ">{book.volumeInfo.title}</h1>
        <h1 class="text-center text-base font-normal text-primary"> {bookAuthors(book.volumeInfo.authors)}</h1>
        <h1 class="text-center text-base font-thin text-primary "> {book.volumeInfo.publishedDate}</h1>
      </div>
      </div>
      {/* <div class="divider"></div>  */}
      </li>
      </div> 

      <div class="grid h-50 w-80 place-items-center">
        <Buttons onClick={() => {AddBookToState(book,index)}} 
        title={"Add Book pls "}/>
      </div>
</div>

          );
        })}
      </ul>
    </section>
    </div>
    <div class="m-auto w-28">
          <img class="rounded-full" src={catPlay} alt="cat" width="80" height="80" />
    </div>
    </div>
  );
};



export default AddBookPage;