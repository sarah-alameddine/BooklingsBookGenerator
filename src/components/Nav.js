import React, { useState } from "react";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <ul class="flex">
    <li class="flex-1 mr-2">
      <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Generator</a>
    </li>
    <li class="flex-1 mr-2">
      <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Add Books!</a>
    </li>
  </ul>
    
  );
}

export default Nav;
