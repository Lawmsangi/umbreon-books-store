import React from 'react';
import { useParams } from 'react-router-dom';
import Books from './books.json';
import '../styles/BooksDetails.css';
import Rating from './Rating';

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
          <div className='books-image'>
            <img src={book.img} alt={book.title} />
          </div>
          
          <div className='book-details' >
            <h3>{book.title} by {book.author}</h3>
            <div className="price-rating">
              <p><span className='strike'>₹{book.mrp}</span><span className='our-price'> ₹{book.ourPrice}</span></p>
              <p className='ratings'><Rating rating={book.ratings} /> {book.ratings}</p>
            </div>
            <p className='genres'>Genres: {book.categories.join(', ')}</p>
            <p>{book.pages} pages</p>
            <p>{book.published}</p>
            <p>{book.description}</p>
            
            <p style={{ textDecoration: 'underline' }}><a href={book.reviews}>Read Reviews From Goodreads</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
