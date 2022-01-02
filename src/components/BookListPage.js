import React, { useState, useEffect } from 'react';
import Buttons from "./Buttons.js";
import SearchBar from "./SearchBar.js";
import {db} from "../firebase-config.js";
// This is how you estabish a connection to a specific collection (kinda like a table in firebase)
// addDoc - allows you to write to database
// use updateDoc - to update fields in collection
import {collection, getDocs, addDoc, deleteDoc,doc} from "firebase/firestore";


export default function BookListPage() {
    const [users,setUsers]= useState([]);
    const [newName,setNewName]= useState("");
    const [newAge,setNewAge]= useState(0);
  
    // create a reference to the collecton you want to use from the database
    const userCollectionRef = collection(db,"books");
  
    /**
     * ADDS ANY NEW USERS CREATED TO THE DATABASE
     * async again cause its dealing with the database
     */
    const createUser = async () => {
      // addDoc takes in 2 things - reference to collection and data
      await addDoc(userCollectionRef, {name: newName, age: Number(newAge)});
      window.location.reload();
    };
      // ---------------------------------------------------------------------------
  /**
   * ADDS USERS TO THE USESTATE ARRAY
   * Use it to make an API call to our database
   * when ever you make an API call make sure to use promise - cause you dont know how long it might take
   */
  useEffect(() => {
    const getUsers = async () => {
      //getDocs returns all the documents from a specific collection
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      // DOCS.DATA -returns age and name of user 
      // doc.id - returns id
      // looping through the data in docs and setting users array to users data and id
      setUsers(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
      
    };

    getUsers();

  }, []);

  const deleteUser = async (id) => {
    const userDoc = doc(db,"users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  }

    return (
        <div class="w-full p-1">

        <div class="m-auto p-10">

          <div>
          {users.map((user) => {
            return ( 
            <div> 
              <h1>Name: {user.name}</h1>
              <h1>Age :{user.age}</h1>
              <Buttons onClick={() => {deleteUser(user.id)}} title="delete book from list"/>
            </div>
            );
          })}
          </div>
        </div>
        </div>
    )
}
