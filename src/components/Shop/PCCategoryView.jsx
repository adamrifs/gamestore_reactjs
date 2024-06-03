import React, { useContext } from 'react'
import { mycontext } from '../context'
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { useParams } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import './pcCat.css'

export default function PCCategoryView() {

  const navigate = useNavigate()
  
  // back function for redirect to mobile home page
  const back = () => {
    navigate('/pcGames')
  }
  // filtermenu design
  function filterBtn() {
    const filterMenu = document.querySelector('.filter-menu');
    const box = document.querySelector('.box')

    if (filterMenu.style.opacity === '1') {
      filterMenu.style.opacity = '0'
    } else {
      filterMenu.style.opacity = '1'
    }
  }


  const { game, setgame ,wish,setwish,cart,setcart } = useContext(mycontext)
  const { category } = useParams()

  // for list display map without duplication
  const cat = [...new Set(game.map(ct => ct.Category))]

  const PCGames = game.filter(gme => gme.Category == category)
  function handleClick(e) {
    const query = e.target.getAttribute('data-value')
    navigate(`/pcCategory/${query}`)
  }

  // wishlist product function starts here

  function wishlistBtn(wprod){
    if(wish.includes(wprod)){
      wish.filter(dt => dt.wprod != wprod)
      setwish(wish.filter((ft) => ft != wprod))
    }else{
      setwish([...wish,wprod])
    }
  }

  // cart product function starts here

  function cartBtn(cprod){
    if(cart.includes(cprod)){
      cart.filter(cf => cf.cprod != cprod)
      setcart(cart.filter((item) => item != cprod))
    }else{
      setcart([...cart,cprod])
    }
  }


  return (
    <div className="box">
      <div className="filter-box">
        <div className="filter" onClick={filterBtn}>
          <div className="filter-icon">
            <IoFilter />
          </div>
        </div>
        <div className="filter-menu">
          <ul>
            {
              cat.map((item) =>
                <li key={item} onClick={handleClick} data-value={item}>
                  {item}
                </li>
              )
            }
          </ul>
        </div>
      </div>
      <div className="nav-back">
        <button onClick={back}><IoArrowBackCircleOutline /></button>
      </div>
      <div className="wishlist-nav">
              <Link to={'/wishlist'}>
              <FaRegHeart />
              </Link>
            </div>
      {
        PCGames.map(dat =>

          <div className="card">
            <div className="image">
              <Link to={`/gamedet/${dat.id}`}>
                <img src={dat.image} />
              </Link>
            </div>
            <div className="g-name">{dat.name}</div>
            <div className="g-price">Price: {dat.price}</div>
            <div className="g-category">Category: {dat.Category}</div>
            {/* <div className="g-desc">{dat.description}</div> */}
            <div className="w-c-btn">
              <button className='w-addingBtn' onClick={() => wishlistBtn(dat)}>
                {wish.includes(dat) ? <FaHeart />: <FaRegHeart />}
                </button>
              <button className='w-addingBtn' onClick={() => cartBtn(dat)}>
                {cart.includes(dat) ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
                </button>
            </div>
          </div>
        )
      }
    </div>
  )
}
