import React, { useContext } from 'react'
import './wishlist.css'
import { mycontext } from '../context'

function Wishlist() {
    const {wish,setwish,cart,setcart} = useContext(mycontext)
    console.log('wished',wish)

    function addcart(cprod){
        if(cart.includes(cprod)){
            cart.filter((ct) => ct !== cprod)
            setcart(cart.filter((c)=> c !== cprod))
        }else{
            setcart([...cart,cprod])
        }
    }
    // remove button starts here
    function wremoveBtn(e){
        setwish(wish.filter((dt) => dt !== e))
    }

console.log('removed',wish)
    return (
        <div className='w-main-Container'>
            <div className="sub-Container">
                <div className="hero">
                    <div className="w-heads">
                        <h2>Wishlist</h2>
                    </div>
                    <div className="w-cart">
                        Cart
                    </div>
                </div>

                {/* product section starts here */}
                {
                    wish.map(item =>
                        <div className="w-prod-box">
                        <div className="w-image">
                            <img src={item.image} alt={item.name} />
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
                            <div className="w-remove">
                                <button onClick={() => wremoveBtn(item)}>Remove</button>
                            </div>
                            <div className="w-pr-vi">
                                <div className="w-price">
                                    <p>Price: {item.price}</p>
                                </div>
                                <div className="w-addCart">
                                    <button onClick={()=> addcart(item)}>
                                        {cart.includes(item)?'REMOVE CART':'ADD TO CART'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default Wishlist