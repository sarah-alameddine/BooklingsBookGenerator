import React from 'react'
import Buttons from "../components/Buttons.js";

export default function DisplayBooks({bookList}) {
    return (
        <div>
        {bookList.map((book) => {
          return ( 
          <div> 
            <img
                alt={`${book.title} book`}
                src={`http://books.google.com/books/content?id=${book.bookId}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
              />
            <h1>{book.title}</h1>
            <h1>{book.author}</h1>
          </div>
          );
        })}
        </div>
    )
}
