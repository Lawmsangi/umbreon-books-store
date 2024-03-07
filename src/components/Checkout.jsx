import React from 'react'
import '../styles/Checkout.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartsSlice';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store)=>store.cart)

  return (
    <div className='checkout'>
        <div className="checkout-left">
          <div className="checkout-line">
            <p className='line'>My Shopping Cart</p>
          </div>
          {/* Check if the cart is empty */}
          <div className="checkout-details">
            <h3>({cart.length}) Items from Umbreon Books</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              // If not empty, map through the cart items and render each CheckoutProduct component
              cart.map((item,index) => (
                <CheckoutProduct
                  key={index}
                 item={item}/>
              ))
            )}
          </div>
        </div>

        <div className="checkout-right">
          <>
            <h2>Order Summary</h2>
            <p><span>Subtotal ({cart.length} items)</span> <span>{}</span></p>
            <span className=''></span>
            <p><span>Order Total:</span> <span>₹ {getCartTotal(cart).toFixed(2)}</span></p>
          </>
          <button onClick={e =>navigate('/payment')}>Proceed to buy</button>
        </div>
    </div>
  )
}

export default Checkout