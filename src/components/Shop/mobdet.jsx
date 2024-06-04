import React, { useContext, useEffect } from 'react'
import './mobdet.css'
import { mycontext } from '../context';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';

function Mobdet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const back = () => {
    navigate('/mobileGame')
  }
  const { id } = useParams()
  const { mobile, wish, setwish, cart, setcart } = useContext(mycontext)
  const mobgame = mobile.find((dt) => dt.id === parseInt(id));


  // cart function starts here

  function cartBtn(cprod) {
    if (cart.includes(cprod)) {
      cart.filter(ft => ft.cprod !== cprod)
      setcart(cart.filter((item) => item !== cprod))
    } else {
      setcart([...cart, cprod])
    }
  }

  function wishlistBtn(wprod) {
    if (wish.includes(wprod)) {
      wish.filter(dt => dt.wprod !== wprod)
      setwish(wish.filter((item) => item !== wprod))
    } else {
      setwish([...wish, wprod])
    }
  }

  return (
    <div className='main-box'>
      <div className="c-nav-back">
        <button onClick={back}><IoArrowBackCircleOutline /></button>
      </div>
      <div className="left-section">
        <div className="game-image">
          <img src={mobgame.image} alt={mobgame.name} />
        </div>
        <div className="game-desc">
          <h1>Product Description</h1>
          <p>{mobgame.description}</p>
        </div>
        <div className="prod-specification">
          <h2>Specifications</h2>
          <p>{mobgame.specs.map((spec) => (
            <li>{spec}</li>
          ))}</p>
        </div>
      </div>

      {/* right section starts here  */}

      <div className="right-section">
        <div className="game-heading">
          <h1>{mobgame.name}</h1>
        </div>
        <div className="game-logo">
          <img src={mobgame.logo} alt='' />
        </div>
        <div className="price">
          <h2>{mobgame.price}</h2>
        </div>
        <div className="prod-buttons">
          <button>BUY NOW</button>
          <button onClick={() => cartBtn(mobgame)}>
            {cart.includes(mobgame) ? 'REMOVE FROM CART' : 'ADD TO CART'}
          </button>
          <button onClick={() => wishlistBtn(mobgame)}>
            {wish.includes(mobgame) ? 'REMOVE ' : 'ADD TO WISHLIST'}
            <span className='wishanimate'><IoIosAddCircleOutline /></span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Mobdet