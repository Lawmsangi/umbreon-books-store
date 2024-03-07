import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import '../styles/Payment.css'

const Payment = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((store)=>store.cart)
    // // let navigate = useNavigate();

    // // const stripe=useStripe();
    // // const elements = useElements();

    // const[error, setError]= useState(null);
    // const[disabled, setDisabled] = useState(true);
    
    // const [processing, setProcessing] = useState("");
    // const [succeeded, setSucceeded] = useState(false);
    // const[clientSecret, setClientSecret] = useState(true);

    // useEffect(() =>{
    //     const getClientSecret = async()=>{
    //         const response = await axios({
    //             method:'post',
    //             url:`/payment/create?total=${getBasketTotal(basket)* 100}`
    //         });
    //         setClientSecret(response.data.clientSecret);
    //     }
    //     getClientSecret();
    // },[basket])

    // console.log('the secret is',clientSecret)
    // console.log('👱',user)

    // const handleSubmit=async(event)=>{
    //      event.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret, 
    //         {payment_method:{
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent})=>{
    //         //paymentIntent=payment.confirmation
    //         setSucceeded(true);
    //         setError(null);
    //         setProcessing(false);

    //         dispatch({
    //             type: 'EMPTY_BASKET'
    //         })

    //         navigate('/orders')
    //     })
        
    // }

    // const handleChange=event=>{
    //     setDisabled(event.empty);
    //     setError(event.error ? event.error.message : "");

    // }
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
                {/* <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />   
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                    <p>
                                    
                                        <strong>Order Total:{value}</strong>
                                    </p>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={"₹"}
                                />
                            <button disabled={processing || disabled ||succeeded}>
                            <span>{processing ? <p>processing</p>: "Buy Now"}</span>    
                            </button> 
                        </div>
                        {}
                        {error && <div>{error}</div>}
                    </form>    
                </div> */}
            </div>
       </div>
    </div>
  )
}

export default Payment