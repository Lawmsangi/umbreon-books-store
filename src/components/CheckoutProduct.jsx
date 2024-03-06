import React from 'react';
import { removeFromCart } from '../redux/cartsSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/CheckoutProduct.css'
import QuantityDropdown from './QuantityDropdown';

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((store)=>store.cart)

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(index));
  };
  return (
    <div className="checkout-product">
        <img className="checkout-product__image" src={item.image} alt={item.title} />
        <div className="checkout-product__info">
          <p className="checkout-product__title">{item.title}</p>
          <p className="checkout-product__title">by {item.author}</p>
          <p className="checkout-product__price">₹{item.price}</p>
          <QuantityDropdown 
           item={item}
          />
          <p className="checkout-product__price">₹</p>
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
    </div>
  );
}

export default CheckoutProduct;
