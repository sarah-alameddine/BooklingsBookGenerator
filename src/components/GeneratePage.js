import React, { useState, useEffect } from 'react';

import MainText from "./MainText.js";
import Buttons from "./Buttons.js";
import RandomBook from "./RandomBook.js";
import {db} from "../firebase-config.js";
// This is how you estabish a connection to a specific collection (kinda like a table in firebase)
// addDoc - allows you to write to database
// use updateDoc - to update fields in collection
import {collection, getDocs, addDoc, deleteDoc,doc} from "firebase/firestore";
import catLook from './catLook.jpg';



function GeneratePage() {
//   const [ranBook,setRanBook] = useState([]);
  const [users,setUsers]= useState({ author: "", bookId: "", publishedDate: "", read: false, title: "" });
  const [booksInDB,setBooksInDB]= useState([]);

  // create a reference to the collecton you want to use from the database
  const userCollectionRef = collection(db,"books");


    // get random item from a Set
  function getRandomItem(booksInDB) {
    // window.location.reload();
    let items = Array.from(booksInDB);
    if (items.length !== 0) {
        let ranBookObj = items[ Math.floor(Math.random() * items.length)];
        // Make sure IT DOESNT COPY AN EMPTY DATABASE RECORD
        if (ranBookObj.bookId !== undefined){
            setUsers( {
                author: ranBookObj.author,
                bookId: ranBookObj.bookId,
                publishedDate: ranBookObj.publishedDate,
                read: ranBookObj.read,
                title: ranBookObj.title,  

            });
            
        }
      return users;
    } 
  }
  // ---------------------------------------------------------------------------
     // Get books from database and put them in useState
     useEffect(() => {
        const getBooksInDB = async () => {
          const data = await getDocs(userCollectionRef);
          // console.log(data);
          setBooksInDB(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
          
        };
    
        getBooksInDB();
    
      }, []);


  return (
    <div class="w-full ">
          <div class="m-auto p-10">
            <MainText/>
          </div>
          <Buttons onClick={() => getRandomItem(booksInDB)} title={"CLICK HERE SAH!"}/>
          <RandomBook users={users}/>
          <div class="m-auto w-28">
          <img class="rounded-full" src={catLook} alt="cat" width="80" height="80" />
          </div>
      </div>
  );
}

export default GeneratePage;