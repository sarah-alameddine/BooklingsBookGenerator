import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav.js";
import {BrowserRouter as Router, Routes , Route } from "react-router-dom";
import BookListPage from './components/BookListPage.js';
import BookListPageRead from './components/BookListPageRead.js';
import GeneratePage from './components/GeneratePage.js';
import ErrorPage from './components/ErrorPage.js';
import AddBookPage from './components/AddBookPage.js';

function App() {

  return (
    <div class="w-full p-1">
        <Router>
        <Nav/>
        <Routes >
          <Route path="/" element={ <GeneratePage/>}/>
          {/* <Route path="/readPage" element={ <BookListPage/>}/> */}
          <Route path="/search2" element={ <AddBookPage/>}/>
          <Route path="/CurrReadPage" element={ <BookListPage/>}/>
          <Route path="/readPage" element={ <BookListPageRead/>}/>
          <Route path="*" element={ <ErrorPage/>}/>
        </Routes >
    </Router>
      </div>
  );
}

export default App;