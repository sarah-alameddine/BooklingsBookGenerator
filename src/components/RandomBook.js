import React, { useEffect,useState } from "react";


function RandomBook({users }) {
  const [showElement,setShowElement] = React.useState(true)
  // useEffect(()=>{
  //   setTimeout(function() {
  //     setShowElement(false)
  //        }, 3000);
  //      },
  //  [])

  return (
    <div class="flex">
      <div class=" lg:mx-auto lg:p-8 pt-24 px-32 ">

            {/* <h1 className="text-1xl lg:text-2xl font-bold text-center"> OUR NEXT BOOK IS:</h1> */}
            {/* {showElement?<div>I'm here and i will be gone</div>:<></>}  */}
              {
            users === undefined || users.bookId === "" ? <span class="invisible"></span> : 
            
            (
              
              <div class="lg:w-96 lg:h-92 lg:py-12 shadow rounded bg-primary-content ">
              <img class=" rounded lg:mx-auto shadow"
                alt={`${users.title} book`}
                src={`http://books.google.com/books/content?id=${users.bookId}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              />
            <div>
                <h1 class="text-center text-3xl py-2">{users.title}</h1>
                <h1 class="text-center text-1xl py-1 text-base font-normal text-primary"> {users.author}</h1>
            </div>
            </div>

            )
            }
            
            {/* </h1> */}
      </div>
    </div>

  );
}

export default RandomBook;

