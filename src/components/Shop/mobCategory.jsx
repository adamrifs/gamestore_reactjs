import React, { useContext } from 'react'
import './mobCategory.css'
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { mycontext } from '../context';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


function MobCategory() {
  const navigate = useNavigate()
  const { mobile ,wish,setwish,cart,setcart} = useContext(mycontext)
  // back function for redirect to mobile home page
  const back = () => {
    navigate('/mobileGame')
  }
  // importig use params for passing parameters to path
  const { Category } = useParams()

  // filter menu design 
  function filterBtn() { 
    const filterMenu = document.querySelector('.filter-menu');

    if (filterMenu.style.opacity === '1') {
      filterMenu.style.opacity = '0'
    } else {
      filterMenu.style.opacity = '1'
    }
  }
  // mapping filter list using map 
  const cat = [...new Set(mobile.map(item => item.Category))]
  // mapping filter list function
  function handleChange(e) {
    const filt = e.target.getAttribute('data-value')
    navigate(`/mobCategory/${filt}`)
  }

  // using data passed by useparams
  const mobCat = mobile.filter(item => item.Category === Category)

   // wishlist product function starts here

   function wishlistBtn(wprod){
    if(wish.includes(wprod)){
      wish.filter(dt => dt.wprod !== wprod)
      setwish(wish.filter((ft) => ft !== wprod))
    }else{
      setwish([...wish,wprod])
    }
  }

  // cart product function starts here

  function cartBtn(cprod){
    if(cart.includes(cprod)){
      cart.filter(cf => cf.cprod !== cprod)
      setcart(cart.filter((item) => item !== cprod))
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
              cat.map(item =>
                <li key={item} data-value={item} onClick={handleChange}>
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
        mobCat.map(dat =>
          <div className="card">
            <div className="image">
              <Link to={`/mobdet/${dat.id}`}>
                <img src={dat.image}  alt=''/>
              </Link>
            </div>
            <div className="g-name">{dat.name}</div>
            <div className="g-price">Price:{dat.price} </div>
            <div className="g-category">Category:{dat.Category}</div>
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

export default MobCategory