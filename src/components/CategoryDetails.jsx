import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Books from './books.json';
import '../styles/CategoryDetails.css';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from '../redux/cartsSlice';
import { useDispatch } from 'react-redux';

function CategoryDetails() {
  const dispatch = useDispatch();
  const { category } = useParams();
  console.log("Category:", category);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const filteredBooks = Books.books.filter(book => book.categories.includes(category));
  console.log(filteredBooks);
  // Calculate the index range of books to display based on the current page
  const startIndex = (currentPage -1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = filteredBooks.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected+1);
  };

  // Scroll to the top when the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className='categoryDetails'>
      <h1>{category}({filteredBooks.length})</h1>
      <span>{`Page ${currentPage}`}</span>
      <div className='details-container'>
        {displayedBooks.map(book => (
          <div className='details-content' key={book.title}>
            <Link to={`/categories/category/${book.title}`}>
              <div className="details-img">
                <img src={book.img} alt={book.title} />
              </div>
            </Link>
            <div className="wishlistIcon-container">
              <button
                className='wishlist-icon'
                onClick={() => dispatch(addToWishlist(book))}
              >
                <FaHeart />
                {/* <span className='wishlist-text'>Make your collections</span> */}
              </button>
            </div>
            <div className="details-name">
              <h4>{book.title} by {book.author}</h4>
              <p><span className='strike'>₹{book.mrp}</span><span className='our-price'> ₹{book.ourPrice}</span></p>
            </div>
          </div>
        ))}
      </div>
        <ReactPaginate
          pageCount={Math.ceil(filteredBooks.length / booksPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
        />
    </div>
  );
}

export default CategoryDetails;
