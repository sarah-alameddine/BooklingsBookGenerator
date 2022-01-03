import React, { useState, useEffect } from 'react';
import Buttons from "./Buttons.js";
import SearchBar from "./SearchBar.js";
import {db} from "../firebase-config.js";
import { Link } from "react-router-dom";
// This is how you estabish a connection to a specific collection (kinda like a table in firebase)
// addDoc - allows you to write to database
// use updateDoc - to update fields in collection
import {collection, getDocs, addDoc, deleteDoc,doc, updateDoc} from "firebase/firestore";
import catHowl from './catHowl.jpg';

export default function BookListPage() {
    const [bookList,setUsers]= useState([]);
    const userCollectionRef = collection(db,"books");
  

  useEffect(() => {
    const getUsers = async () => {
      //getDocs returns all the documents from a specific collection
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
      
    };

    getUsers();

  }, []);

  const deleteBookFromDB = async (id) => {
    const userDoc = doc(db,"books", id);
    await deleteDoc(userDoc);
    window.location.reload();
  }

  const markBookAsRead = async (id) => {
    // when updating we want to specify the specific doc we are updating
    const userDoc = doc(db,"books", id);
    const updateField = {read: true};
    await updateDoc(userDoc, updateField);
    window.location.reload();
  }

  const markBookAsUnread = async (id) => {
    const userDoc = doc(db,"books", id);
    const updateField = {read: false};
    await updateDoc(userDoc, updateField);
    window.location.reload();
  }
  // return true for if it contains books read
  // false is it does not contains books read
  const checkIfListhasReadBooks= (bookList,read ) => {
    if (bookList.filter(book => book.read === read).length > 0) {
      /* vendors contains the element we're looking for */
      return true;
    }
    return false;
  }
    return (
      <div class="w-full p-1">
        <div class="py-4 artboard artboard-demo">
  <ul class="menu items-stretch px-3 shadow-lg bg-base-100 horizontal rounded-box">
    <li>
    <Link to="/CurrReadPage">
            Current Books
            </Link>
    </li> 
    <li class="bordered">
    <Link to="/readPage">
            Read Books
            </Link>
    </li> 
  </ul>
</div>
        <div class="m-auto p-10 ">
          <div>
          {/* ----------------------------------------- BOOKS THAT HAVE BEEN READ --------------------------------------- */}
          <h1 class="text-5xl lg:text-5xl font-bold text-center text-primary-focus py-10" > Read book list </h1>
          {checkIfListhasReadBooks(bookList, true) === false ? 
          <div class="shadow py-20 text-center">NO BOOKS TO LIST CAUSE YOU HAVENT READ ANY :( </div>
          : bookList.map((book) => {
            if (book.read === true){
            return ( 
              <div>
            <div class="shadow py-20"> 
              {/* <div class="divider px-20"></div>  */}
              {/* <div class="grid rounded-box place-items-center"> */}

              <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow h-50  place-items-center">
            <img
                  alt={`${book.title} book`}
                  src={`http://books.google.com/books/content?id=${book.bookId}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
              <h1 class="py-1 font-semibold text-2xl ">{book.title}</h1>
              <h1 class="py-1 text-base font-normal text-primary">{book.author}</h1>
              </div> 
            <div class="grid flex-grow  lg:w-1 lg:h-0 lg:pt-20 place-items-center">
            <Buttons onClick={() => {markBookAsUnread(book.id)}} title="Mark Book as unread"/>
            <Buttons onClick={() => {deleteBookFromDB(book.id)}} title="delete book from list"/>
            </div>
            </div>

          </div>
          {/* <div class="divider  divider-primary px-20"></div>  */}
            </div>
            );
          }})}
          </div>
        </div>
        <div class="m-auto w-28">
          <img class="rounded-full" src={catHowl} alt="cat" width="80" height="80" />
    </div>
        </div>
    )
}
