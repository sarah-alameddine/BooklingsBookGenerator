import React, { useState } from "react";


function Buttons({onClick,title}) {

  return (
    <div class="flex p-1 ">
      <div class="mx-auto">
        <button 
        // class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
        // class="btn btn-active border-primary-content shadow bg-primary-content  text-primary hover:border-base-300 hover:bg-base-300" role="button" aria-pressed="true"
        class="btn btn-active border-primary shadow bg-primary  hover:border-base-300 hover:bg-primary-focus" role="button" aria-pressed="true"
        onClick={onClick}> 
        {title}
        </button>
      </div>
    </div>

  );
}

export default Buttons;

