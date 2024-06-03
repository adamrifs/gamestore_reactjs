import React, { useContext, useEffect, useRef, useState } from 'react'
import { mycontext } from '../context'
import './shop.css'
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import fornax from '../navbar/fornax.png';
import video2 from '../navbar/video2.mp4';
import Footer from '../footer/footer';
function Shop() {

  const { game, setgame, mobile, setmobile } = useContext(mycontext)
  const lsectionelement = useRef(null)

  // ============= image carousel =================
  const imgSlide = game.filter(item => [ 2, 3,25,7].includes(item.id))
  console.log('imgslide', imgSlide)
  
  // ============ top categories===========
  
  const tcGame = [24, 27, 4, 5, 22, 25, 23]
  const tcGamesort = tcGame.map(index => game[index])
  
  // =========== new releases==========
  // const imagesort = game.slice(10, 16)
  const nrelesesort =[10,14,27,13,3,22] 
  const nrelease = nrelesesort.map(index => game[index])


  // ============= mobile games sort =========
  const mobileindices = [0, 21, 2, 3, 6, 7,1 , 5, 9]
  const mobgames = mobileindices.map(index => mobile[index])

  // ============ scroll animation ============
  useEffect(() => {
    const leftslide = () => {
      if (lsectionelement.current) {
        if (window.scrollY > 20) {
          lsectionelement.current.classList.add('fade-out');
          lsectionelement.current.classList.remove('fade-in');
        } else {
          lsectionelement.current.classList.add('fade-in');
          lsectionelement.current.classList.remove('fade-out');
        }
      }
    }
    window.addEventListener('scroll', leftslide)
    return () => {
      window.removeEventListener('scroll', leftslide);
    };

  }, [])


  // heading scroll
  const newreleaseref = useRef(null)
  const [isvisible, setisvisible] = useState(false)

  useEffect(() => {

    function handleSwipe() {
      const elementtop = newreleaseref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (newreleaseref.current) {
        if (elementtop < windowHeight / 2) {
          setisvisible(true)
        } else {
          setisvisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleSwipe)
    return () => {
      window.removeEventListener('scroll', handleSwipe);
    };

  }, [])


  const mobcardref = useRef(null)
  const [cardvisible, setcardvisible] = useState(false)

  useEffect(() => {

    function cardswipe() {
      const cardelement = mobcardref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (mobcardref.current) {
        if (cardelement < windowHeight + 100) {
          setcardvisible(true)
        } else {
          setcardvisible(false)
        }
      }
    }

    window.addEventListener('scroll', cardswipe);

    return () => {
      window.removeEventListener('scroll', cardswipe);
    };

  }, [])

  return (
    <div className='home-container'>
      <video autoPlay muted loop id='bg-video'>
        <source src={video2} type='video/mp4' />
      </video>
      <div className="landing-page">
        <div ref={lsectionelement} className="h-left-section fade-in">
          <h1>
            Experience The Ultimate <br />
            Level Of<span className='highlight-text'> Gaming .</span>
          </h1>
        </div>
        <div className="h-right-section">
          <div className="h-r-img">
            <img src={fornax} />
          </div>
        </div>
      </div>


      <div className="second-section">
        <div ref={newreleaseref} className={`slider-heads ${isvisible ? 'fade' : ''}`}>
          <h1>Featured Now</h1>
        </div>
        <div className='slide-wrapper'>
          <div className="slider">
            {
              imgSlide.map(item =>
                <Link to={`/gamedet/${item.id}`}><img src={item.image} /></Link>
              )
            }
            {/* <img src='https://wallpapers.com/images/hd/counter-strike-global-offensive-desktop-gvy020lt6pjvnze8.jpg' />
          <img src='https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/d2_IntoTheLight_Boot-Image_MASTER_EPIC_Landscape_Offer_EN_2560x1440-40eba9b07abfa902ffdc2361ed5b264e' />
          <img src='https://buy.thewitcher.com/build/images/home/bg-witcher3-1440@1x-ce4038c1.jpg ' />
          <img src='https://assets.xboxservices.com/assets/34/0a/340ada26-49f7-48f1-a572-b27dd6ec766b.jpg?n=DOOM-Eternal_GLP-Page-Hero-0_1083x609_02.jpg' /> */}
          </div>
        </div>


        <div className="t-c-head">
          <h2>Top PC Categories</h2>
        </div>
        <div className="top-categories">

          {
            tcGamesort.map(img =>
              <>
                <div className="t-c-slider">
                  <Link to={`/gamedet/${img.id}`}>
                    <img src={img.image} />
                  </Link>
                </div>
              </>
            )}
          {
            game.map(gimg =>
              <div className="t-c-slider">
                <Link to={`/gamedet/${gimg.id}`}>
                  <img src={gimg.image} />
                </Link>
              </div>
            )
          }

        </div>

        <div className="new-release-box">
          <div className="release-heads">
            <h2>New Releases <MdArrowForwardIos /></h2>
          </div>

          <div className='release-card-cont'>
            {nrelease.map(rlc =>
              <div className="release-cards">
                <div className="r-card-image">
                  <Link to={`/gamedet/${rlc.id}`}>
                    <img src={rlc.image} />
                  </Link>
                </div>
                <div className="r-card-catg">
                  <p>{rlc.Category}</p>
                </div>
                <div className="r-card-g-name">
                  <p>{rlc.name}</p>
                </div>
                <div className="r-card-price">
                  <p>{rlc.price}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mobile-games-contain">
          <div className="mb-head-cont">
            <h2>Trending Mobile Games </h2>
            <MdArrowForwardIos />
          </div>
          <div className="mb-card-boxes-cont">
            {
              mobgames.map((mbgame) =>
                <div ref={mobcardref} className={`mb-g-c-card ${cardvisible ? 'cardswipe' : ''} `} >
                  <Link to={`mobdet/${mbgame.id}`}>
                    <img src={mbgame.image} />
                  </Link>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </div>

  )
}

export default Shop