import React, { useContext ,useEffect } from 'react'
import './searched.css'
import { mycontext } from '../context';
import { FaRegHeart } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Searched() {
    const navigate = useNavigate()
    const { searched, setsearched, } = useContext(mycontext)
    console.log('searcheddata', searched);

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    

    // filter menu design==============
    function filterBtn() {
        const filterMenu = document.querySelector('.sr-filter-menu');
        if (filterMenu.style.visibility === 'visible') {
            filterMenu.style.visibility = 'hidden'
            filterMenu.style.opacity ='0'
          } else {
            filterMenu.style.visibility = 'visible'
            filterMenu.style.opacity ='1'
          }
    }

    const back = ()=>{
        navigate('/pcGames')
    }

    return (
        <div className="sr-box">
            <div className="sr-c-nav-back">
                <button onClick={back}><IoArrowBackCircleOutline /></button>
            </div>
            <div className="sr-filter-box">
                <div className="sr-filter" onClick={filterBtn}>
                    <div className="sr-filter-icon">
                        <IoFilter />
                    </div>
                </div>
                <div className="sr-filter-menu">
                    <ul>
                        {
                            // cat.map(item =>
                            //     <li key={item} onClick={handleClick} data-value={item}>
                            //         {item}
                            //     </li>
                            // )
                        }
                    </ul>
                </div>
                <div className="sr-pc-wishlist-nav">
                    <Link to={'/wishlist'}>
                        <FaRegHeart />
                    </Link>
                </div>
            </div>
            {
                searched.map(dat =>

                    <div className="sr-card">
                        <div className="sr-image">
                            <Link to={`/gamedet/${dat.id}`}>
                                <img src={dat.image} alt={dat.name} />
                            </Link>
                        </div>
                        <div className="sr-g-name">{dat.name}</div>
                        <div className="sr-g-price">Price: {dat.price}</div>
                        <div className="sr-g-category">Category: {dat.Category}</div>
                        {/* <div className="g-desc">{dat.description}</div> */}
                        <div className="sr-w-c-btn">
                            {/* <button className='sr-w-addingBtn' onClick={() => wishlistBtn(dat)}>
                                {wish.includes(dat) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                            <button className='sr-w-addingBtn' onClick={() => cartBtn(dat)}>
                                {cart.includes(dat) ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
                            </button> */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Searched