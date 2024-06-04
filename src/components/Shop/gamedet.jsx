import React, { useContext, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mycontext } from '../context'
import './gamedet.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";


function Gamedet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const back = () => {
    navigate('/pcGames')
  }

  const { id } = useParams()
  const { game, cart, setcart, wish, setwish } = useContext(mycontext)
  console.log(id)
  // const product = datafile.find((pro) => pro.id === parseInt.id)
  const product = game.find((pro) => pro.id === parseInt(id));
  // const product = game.find((pro) => pro.id === id);

  console.log("products", product);

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
          <img src={product.image} alt={product.name}/>
        </div>
        <div className="game-desc">
          <h1>Product Description</h1>
          <p>{product.description}</p>
        </div>
        <div className="prod-specification">
          <h2>Specification</h2>
          <p>{product.specs.map((spec) => (
            <li>{spec}</li>
          ))}</p>
        </div>
      </div>

      {/* right section starts here  */}

      <div className="right-section">
        <div className="game-heading">
          <h1>{product.name}</h1>
        </div>
        <div className="game-logo">
          <img src={product.logo}  alt={product.name}/>
        </div>
        <div className="price">
          <h2>{product.price}</h2>
        </div>
        <div className="prod-buttons">
          <button>BUY NOW</button>
          <button onClick={() => cartBtn(product)}>
            {cart.includes(product) ? 'REMOVE FROM CART' : 'ADD TO CART'}
          </button>
          <button onClick={() => wishlistBtn(product)}>
            {wish.includes(product) ? 'REMOVE' :'ADD TO WISHLIST'}
            <span className='wishanimate'><IoIosAddCircleOutline /></span>
            </button>
        </div>
      </div>

    </div>
  )
}

export default Gamedet