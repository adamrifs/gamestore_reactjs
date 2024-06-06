import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './pcGames.css'
import { mycontext } from '../context'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoFilter } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

function PcGames() {

  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);

  const navigate = useNavigate()
  const { game,wish,setwish,cart,setcart } = useContext(mycontext)

  // filtermenu design
  function filterBtn() {
    const filterMenu = document.querySelector('.filter-menu');


    if (filterMenu.style.display === 'none' || filterMenu.style.display === '') {
      filterMenu.style.display = 'block'
      filterMenu.style.opacity ='1'
    } else {
      filterMenu.style.display = 'none'
      filterMenu.style.opacity ='0'
    }
  }


  // to list filter design data
  const cat = [...new Set(game.map(item => item.Category))]
  console.log("cat", cat);

  // filtermenu function
  const handleClick = (e) => {
    let query = e.target.getAttribute('data-value');
    query = query.split(" ").join("-")
    navigate(`/pcCategory/${query}`);
  };

  // wishlist and cart button starts here
  function wishlistBtn(prod){
    if(wish.includes(prod)){
      wish.filter(fl => fl.prod !== prod)
      setwish(wish.filter((dt) => dt !== prod))

    }else{
      setwish([...wish,prod])
    }
  }

// cart button

  function cartBtn(e){
    if(cart.includes(e)){
      cart.filter(dt => dt.e !== e)
      setcart(cart.filter((rc) => rc !== e))
    }else{
      setcart([...cart,e])
    }
  }


  console.log('wished',wish)
  return (
    <div className="box">
      <div className="filter-box">
        <div className="pc-filter" onClick={filterBtn}>
          <div className="filter-icon">
            <IoFilter />
          </div>
        </div>
        <div className="filter-menu">
          <ul>
            {
              cat.map(item =>
                <li key={item} onClick={handleClick} data-value={item}>
                  {item}
                </li>
              )
            }
          </ul>
        </div>
            <div className="pc-wishlist-nav">
              <Link to={'/wishlist'}>
              <FaRegHeart />
              </Link>
            </div>
      </div>
      {
        game.map(dat =>

          <div className="card">
            <div className="image">
              <Link to={`/gamedet/${dat.id}`}>
                <img src={dat.image} alt={dat.name}/>
              </Link>
            </div>
            <div className="g-name">{dat.name}</div>
            <div className="g-price">Price: {dat.price}</div>
            <div className="g-category">Category: {dat.Category}</div>
            {/* <div className="g-desc">{dat.description}</div> */}
            <div className="w-c-btn">
              <button className='w-addingBtn' onClick={() => wishlistBtn(dat)}>
                {wish.includes(dat)?<FaHeart />: <FaRegHeart />}
                </button>
              <button className='w-addingBtn' onClick={() => cartBtn(dat) }>
                {cart.includes(dat)? <MdShoppingCart />:<MdOutlineShoppingCart />}
              </button>
            </div>
          </div>
        )
      }
    </div>

  )
}

export default PcGames