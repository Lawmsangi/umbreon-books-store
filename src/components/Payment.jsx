import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import '../styles/Payment.css'
import useRazorpay from "react-razorpay";
import { getCartTotal } from '../redux/cartsSlice'
import LogoIcon from '../assets/umbreon_books.png'

const Payment = () => {
  const { cart } = useSelector((store)=>store.cart)
  const [Razorpay] = useRazorpay();
  
  const handlePayment = async () => {
//   const order = await createOrder(params); //  Create order on your backend
    const totalAmount = getCartTotal(cart)
  const options = {
    key: "rzp_test_DJ0wezYx3QyIiu", // Enter the Key ID generated from the Dashboard
    amount: totalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Umbreon Books",
    description: "Test Transaction",
    image: LogoIcon,
    // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
    // handler: function (response) {
    //   alert(response.razorpay_payment_id);
    //   alert(response.razorpay_order_id);
    //   alert(response.razorpay_signature);
    // },
    prefill: {
      name: "Lawmsangi Varte",
      email: "lawmsangivarte22@gmail.com",
      contact: "6009766073",
    },
    notes: {
      address: "Zuangtui, Aizawl",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new Razorpay(options);
  rzp1.open();
};


  return (
    <div className='payment'>
       <div className="payment__container">
        <h1>Checkout(<Link to='/checkout'>{cart?.length}items</Link>)</h1>
            <div className="payment__section">
                <div className="payment__title">
                  <h3>Delivery address</h3>      
                </div>
                <div className="payment__address">
                    {/* <p>{user?.email}</p> */}
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                  <h3>Review items and delivery</h3>      
                </div>
                <div className="payment__items">
                    {cart.map(item=>(<CheckoutProduct
                    title={item.title}
                    image={item.img}
                    price={item.ourPrice}
                    rating={item.rating}
                />))}
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment method</h3>
                </div>
                <div className="payment__details">
                    <button onClick={handlePayment}>Pay Now</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Payment