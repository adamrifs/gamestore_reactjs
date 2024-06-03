import React, { useContext, useState } from 'react'
import './cart.css'
import { mycontext } from '../context'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
function Cart() {
    const { cart, setcart } = useContext(mycontext)

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
                <div className="sub-Container">
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
                                <div className="w-prod-box">
                                    <div className="w-image">
                                        <img src={item.image} alt='' />
                                    </div>
                                    <div className="w-name-cat">
                                        <div className="w-name">
                                            <h1>{item.name}</h1>
                                        </div>
                                        <div className="w-cat">
                                            <h3>{item.Category}</h3>
                                        </div>
                                    </div>
                                    <div className="w-right-section">
                                        <div className="qty">
                                            <button className='Q-btn' onClick={() => qsub(item)}>-</button>
                                            <span className='Q-para'>{item.qty}</span>
                                            <button className='Q-btn' onClick={() => qadd(item)}>+</button>
                                        </div>
                                        <div className="w-remove">
                                            <button onClick={() => removeCart(item)}>Remove</button>
                                        </div>
                                        <div className="w-pr-vi">
                                            <div className="w-price">
                                                <p>{item.price * item.qty}</p>
                                            </div>
                                            <div className="w-viewCart">
                                                <button >
                                                    BUY NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart