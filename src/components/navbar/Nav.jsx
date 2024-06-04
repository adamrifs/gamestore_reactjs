import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import { PiShoppingCartThin } from "react-icons/pi";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mycontext } from '../context';
import { IoIosSearch } from "react-icons/io";
import fornax from './fornax.png';
import { CiUser } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import Swal from 'sweetalert2'
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

function Nav() {
    const navigate = useNavigate()
    const { logeduser, setlogeduser, searched, setsearched, mobile, user, game, searchdt, setsearchdt, istheme, setistheme } = useContext(mycontext)
    const { logout, setlogout } = useContext(mycontext)
    const [searchinp, setsearchinp] = useState([])
    const { id } = useParams()
    const [scrolled, setScrolled] = useState(false);
    const [isopen, setisopen] = useState(false)

    console.log(searchinp);
    function searchFunction() {
        const combinedarr = [
            ...game, ...mobile
        ]
        const searched = combinedarr.filter((item) => item.name.toLowerCase().startsWith(searchinp.toLowerCase()) ||
            item.name.toLowerCase().includes(searchinp.toLowerCase()));
        console.log('searchedata==', searched);

        if (searched) {
            setsearched([...searched])
            navigate('/searched')
        } else {
            Swal.fire({
                title: 'Not found',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    }

    // console.log(searchdt)

    const login = () => {
        if (logout != null) {
            setlogout(null)
        } else {

            navigate('/login')
        }
    }

    const home = () => {
        navigate('/')
    }
    const Pcgame = () => {
        navigate('/pcGames')
    }
    const mbgame = () => {
        navigate('/mobileGame')
    }

    const cart = () => {
        if (logeduser.length) {
            navigate('/cart')
        } else {
            Swal.fire({
                title: 'Please login to continue',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
        navigate('/cart')
    }

    function handleTheme(e) {
        if (e.target.checked) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
            localStorage.setItem('selectedtheme', 'dark')
            setistheme(true)
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light')
            localStorage.setItem('selectedtheme', 'light')
            setistheme(false)
        }
    }
    useEffect(() => {
        const selectedtheme = localStorage.getItem('selectedtheme')
        if (selectedtheme === 'dark') {
            document.querySelector('body').setAttribute('data-theme', 'dark')
            document.getElementById('toggle-theme').checked = true;
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light')
            document.getElementById('toggle-theme').checked = false;
        }
    }, [])

    // ============== window scroll function =============
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //================hamburger menu ===============

    const showMenu = ()=>{
        setisopen(!isopen)
    }

    return (
        <div className='nav-main-cont'>
            <div className={`nav-bar ${scrolled ? 'scrolled sticky' : ''}`}>
                <div className="nav-logo">
                    <Link to={'/'} ><img src={fornax} /></Link>
                    <p>Fornax</p>
                </div>

                <ul className={`nav-links ${isopen ? 'open' : ''}`}>
                    <li onClick={home}>Home</li>
                    <li onClick={Pcgame}>PC</li>
                    <li onClick={mbgame}>Mobile</li>
                    <li>About Us</li>
                </ul>

                <div className="search-bar">
                    <input type='text'
                        placeholder='Search'
                        value={searchinp}
                        onChange={(e) => setsearchinp((e).target.value)} />
                    <button onClick={searchFunction}
                        className='searchBtn'>
                        <IoIosSearch />
                    </button>
                </div>

                <span className='hamburger-menu' onClick={showMenu} ><RiMenu3Fill /></span>

                <div className={`nav-logCart ${isopen ? 'open':''}`} >
                    <div className="theme-toggle">
                        <input type='checkbox' className='nav-toggle-theme' id='toggle-theme' checked={istheme} onChange={handleTheme} />
                        <label for='toggle-theme' >
                            <span className='n-sun'><BsSunFill /></span>
                            <span className='n-moon'><BsFillMoonStarsFill /></span>
                        </label>
                    </div>
                    <div className="button">
                        <button onClick={login} id='logBtn'>{logout != null ? 'Logout' : 'Login'}</button>
                    </div>
                    <div className="cart" onClick={cart}>
                        <li><PiShoppingCartThin /></li>
                    </div>
                    <div className="user-acc">
                        <Link to={'/user'}>
                            <CiUser />
                        </Link>
                    </div>
                    <span className='close-menu' onClick={showMenu} ><IoIosArrowForward /></span>

                </div>
            </div>
        </div>
    )
}

export default Nav