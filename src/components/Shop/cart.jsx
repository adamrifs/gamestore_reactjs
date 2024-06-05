import React, { useContext, useState , useEffect} from 'react'
import './cart.css'
import { mycontext } from '../context'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const { cart, setcart} = useContext(mycontext)

    // ============= adding buttons function ============ 

    function qadd(product) {
        const updatedProduct = cart.map((item) => {
            if (item === product) {
                const prodQty = item.qty + 1;
                return { ...item, qty: prodQty }
            }
            return item;
        })
        setcart(updatedProduct)
    }

    function qsub(product) {
        const updatedProduct = cart.map(item => {
            if (item === product && item.qty > 1) {
                const prodQty = item.qty - 1;
                return { ...item, qty: prodQty }
            }
            return item
        })
        setcart(updatedProduct)
    }

// Filter out items with price not equal to "Free"
const cartWithPrice = cart.filter((item) => item.price !== "Free");

// Calculate the total price of each item
const totalPricePerItem = cartWithPrice.map((item) => item.price * item.qty);

console.log("total",totalPricePerItem);

// Calculate the total price by summing up the prices of all items
const totalPrice = totalPricePerItem.reduce((total, price) => total + price, 0);

    // ========== remove cart button =======
    function removeCart(prod) {
        setcart(cart.filter(dt => dt !== prod))
    }
    return (
        <div className='main-Container'>
            <div className='m-s-box'>
                <div className="s-left-section">
                    <div className="sort-container">
                        Sort by
                        <span className='s-arrow-d'><IoIosArrowDown /></span>
                    </div>
                </div>
                <div className="second-Container">
                    <div className="hero">
                        <div className="w-heads">
                            <h2>Cart</h2>
                        </div>
                        <div className="w-wish">
                            <Link to={'/wishlist'}>
                                WISHLIST
                            </Link>
                        </div>
                    </div>


                    {/* product section starts here */}
                    <div className="sub-w-prod-box">
                        {
                            cart.map(item =>
                                <div className="c-prod-box">
                                    <div className="c-image">
                                        <img src={item.image} alt='' />
                                    </div>
                                    <div className="c-name-cat">
                                        <div className="c-name">
                                            <h1>{item.name}</h1>
                                        </div>
                                        <div className="c-cat">
                                            <h3>{item.Category}</h3>
                                        </div>
                                    </div>
                                    <div className="c-right-section">
                                        <div className="qty">
                                            <button className='Q-btn' onClick={() => qsub(item)}>-</button>
                                            <span className='Q-para'>{item.qty}</span>
                                            <button className='Q-btn' onClick={() => qadd(item)}>+</button>
                                        </div>
                                        <div className="c-remove">
                                            <button onClick={() => removeCart(item)}>Remove</button>
                                        </div>
                                        <div className="c-pr-vi">
                                            <div className="c-price">
                                                <p>{item.price * item.qty}</p>
                                            </div>
                                            <div className="c-viewCart">
                                                <button >
                                                    BUY NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="cart-price">
                            <h3>Cart total :</h3>
                            <p>{totalPrice.toFixed(2)}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart