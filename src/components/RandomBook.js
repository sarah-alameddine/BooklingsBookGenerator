import React, { useState } from "react";


function RandomBook({ranNumber}) {

  return (
    <div class="flex">
      <div class="mx-auto p-10">
            <h1 className="text-1xl lg:text-2xl font-bold text-center"> OUR NEXT BOOK IS:</h1>
            <h1 className="text-1xl lg:text-2xl font-bold text-center">{ranNumber}</h1>
      </div>
    </div>

  );
}

export default RandomBook;

