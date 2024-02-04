import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { TbShoppingCartHeart } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { BsSearchHeart } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import Books from './books.json'; 

function Navbar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };

    // Function to handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        // Filter books based on the search value
        const filteredBooks = value.trim() !== '' ?
            Books.books.filter(book =>
                book.title.toLowerCase().includes(value) || 
                book.author.toLowerCase().includes(value)
            ) : [];
        setSearchResults(filteredBooks);
    };

    // Function to navigate to book details page
    const navigateToBookDetails = (title) => {
        navigate(`/categories/category/${title}`);
        setSearchResults([]);
        setSearchValue('');
    };

    return (
        <div className="navbar">
            <div className="navbar-first">
                <div className="navbar-links">
                    <Link><SlMenu /></Link>
                    <Link to="https://www.google.com/maps?q=Umbreon+Books,+near+upc+church,+Zuangtui,+Aizawl,+Mizoram+796014&ftid=0x374debac308b7d17:0x967946d1a761b999&hl=en-IN&gl=in&entry=gps&lucs=47062720&g_ep=CAISBjYuNTYuMhgAINeCAyoINDcwNjI3MjBCAklO&g_st=iw"><CiLocationOn /></Link>
                </div>
                <Link to="/" className="title">
                    <h3>Umbreon Books</h3>
                </Link>
                <div className="navbar-links">
                    <a href="/about"><HiOutlineHeart /></a>
                    <a href="/"><TbShoppingCartHeart /></a>
                </div>
            </div>

            <div className="navbar-second">
                <div className="navbar-search">
                    <IoArrowBack className='back-icon'onClick={goBack} />
                    <input type="text" placeholder="Search" value={searchValue} onChange={handleSearchChange} />
                    <span className="search-icon"><BsSearchHeart /></span>
                </div>
            </div>

            {searchValue.trim() !== '' && (
                <div className="search-results">
                    {searchResults.slice(0, 7).map((book, index) => (
                        <div key={book.title}>
                            <p onClick={() => navigateToBookDetails(book.title)}>
                                {book.title}
                            </p>
                        </div>
                    ))}
                    {searchResults.length > 7 && <p>...</p>}
                </div>
            )}
        </div>
    );
}

export default Navbar;
