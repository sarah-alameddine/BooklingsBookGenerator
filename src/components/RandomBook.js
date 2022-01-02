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
      <div class="mx-auto p-10">
        {/* {console.log("ranBook=========",users)} */}
            {/* <h1 className="text-1xl lg:text-2xl font-bold text-center"> OUR NEXT BOOK IS:</h1> */}
            {/* {showElement?<div>I'm here and i will be gone</div>:<></>}  */}
              {
            users === undefined || users.bookId === "" ? <span></span> : 
            
            (

              <div>
              <img
                alt={`${users.title} book`}
                src={`http://books.google.com/books/content?id=${users.bookId}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              />
            <div>
                <h1>{users.title}</h1>
                <h1>{users.author}</h1>
                <h1>{users.publishedDate}</h1>
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

