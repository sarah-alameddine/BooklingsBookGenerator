import React, { useState } from "react";
import { Link } from "react-router-dom";
import cat from './cat.jpg'; 

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (

<div class=" rounded-lg shadow bg-base-300 drawer h-30 lg:h-20  ">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> 
  <div class="flex flex-col drawer-content">
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold px-1">
            BooklingsBookClub
          </span>
          <img class="rounded-full" src={cat} alt="cat" width="50" height="50" />
      </div> 
      <div class="flex-none hidden lg:block">
        <ul class="menu horizontal">
          <Link to="/"  class="btn btn-ghost btn-sm rounded-btn">Book Generator</Link>
          <Link to="/search2"  class="btn btn-ghost btn-sm rounded-btn">Search</Link>
          <Link to="/CurrReadPage"  class="btn btn-ghost btn-sm rounded-btn">Booklings Book List</Link>
        </ul>
      </div>
    </div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
      <Link to="/"  class="btn btn-ghost btn-sm rounded-btn">Book Generator</Link>
      <Link to="/search2"  class="btn btn-ghost btn-sm rounded-btn">Search</Link>
      <Link to="/CurrReadPage"  class="btn btn-ghost btn-sm rounded-btn">Booklings Book List</Link>
    </ul>
  </div>
</div>


  );
}

export default Nav;
