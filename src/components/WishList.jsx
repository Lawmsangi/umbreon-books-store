import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/WishList.css';
import { removeFromWishlist } from '../redux/cartsSlice';
import { Link } from 'react-router-dom';

const WishList = () => {
    const dispatch = useDispatch();
    const { wishlist } = useSelector((store)=>store.cart)   

  return (
    <div className='wishlist-container'>
        <h1>WishList</h1>
        <h2>Your collections</h2>
        <div className="wishlist-content">
        {/* Check if the wishlist is empty */}
        {wishlist.length === 0 ? (
            <p>Your wishlist is empty</p>
        ) : (
            // If not empty, map through the wishlist items and render each book
            wishlist.map((item,index) => (
                <div 
                    key={index}
                    className='wishlist-item'
                >
                    {/* <p>{item.title}</p>
                    <p>{item.author}</p> */}
                    <Link to={`/categories/category/${item.title}`}>
                        <img 
                            src={item.img} 
                            alt={item.title}
                            className='wishlist-img'
                        />
                    </Link>
                    <button 
                        onClick={() => dispatch(removeFromWishlist(index))}
                    >
                        Remove
                    </button>
                </div>
            ))
        )}
        </div>
    </div>
  )
}

export default WishList