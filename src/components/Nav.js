import React, { useState } from "react";
import { Link } from "react-router-dom";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <ul class="flex">
    <li class="flex-1 mr-2">
      <Link to="/" class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" >Book Generator</Link>
    </li>
    <li class="flex-1 mr-2">
      <Link to="search2" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Search</Link>
    </li>
    <li class="flex-1 mr-2">
      <Link to="/search" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Booklings Book List</Link>
    </li>
  </ul>
    
  );
}

export default Nav;
