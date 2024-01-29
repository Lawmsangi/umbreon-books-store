import React from 'react';
import { useParams } from 'react-router-dom';
import Books from './books.json';
import '../styles/CategoryDetails.css';

function CategoryDetails() {
  const { title } = useParams();
  const filteredBooks = Books.books.filter(book => book.categories.includes(title));

  return (
    <div className='categoryDetails'>
      <h1>{title}</h1>
      <div className='details-container'>
        {filteredBooks.map(book => (
          <div className='details-content' key={book.title}>
            <img src={book.img} alt={book.title} />
            <h2>{book.title} by {book.author}</h2>
            <p><span className='strike'>₹{book.mrp}</span><span className='our-price'> ₹{book.ourPrice}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetails;
