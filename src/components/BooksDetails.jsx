import React from 'react';
import { useParams } from 'react-router-dom';
import Books from './books.json';
import '../styles/BooksDetails.css';

function BookDetails() {
  const { title } = useParams();
  const filteredBooks = Books.books.filter(book => book.title.includes(title));

  if (filteredBooks.length === 0) {
    return <div>No books found for the title: {title}</div>;
  }

  return (
    <div>
      {filteredBooks.map(book => (
        <div key={book.title} className='books-details'>
          <h1>{book.title}</h1>
          <div className='books-image'>
            <img src={book.img} alt={book.title} />
          </div>
          <div className='book-details' >
            <p>Author: {book.author}</p>
            <p>Categories: {book.categories.join(', ')}</p>
            <p>Our Price: ₹{book.ourPrice}</p>
            <p>MRP: ₹{book.mrp}</p>
            <p>Pages: {book.pages}</p>
            <p>Published: {book.published}</p>
            <p>Ratings: {book.ratings}</p>
            <p>Description: {book.description}</p>
            <p>Reviews: <a href={book.reviews}>Read Reviews</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
