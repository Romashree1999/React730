import React from 'react';
import {BookList} from './BookList';
import BookListClass from './BookListClass';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList/>
    <BookListClass/>
  </React.StrictMode>
);


