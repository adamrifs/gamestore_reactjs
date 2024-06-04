import React, { useContext, useState , useEffect} from 'react'
import './user.css'
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { PiTruckLight } from "react-icons/pi";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { mycontext } from '../context';
import Cart from '../Shop/cart';
import Wishlist from '../Shop/wishlist';
import Theme from '../navbar/theme';
import Settings from '../navbar/settings';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function User() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { logeduser, user, theme, settheme } = useContext(mycontext)
  const [activeComponent, setactiveComponent] = useState('Theme')
  const navigate = useNavigate()

  function handleComponent(cname) {
    setactiveComponent(cname)
  }
  function handleComponentCart(Cname) {
    if (logeduser.length) {
      setactiveComponent(Cname)
    } else {
      Swal.fire({
        title: 'Please login to continue',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      navigate('/login')
    }
  }

  const components = {
    Cart: Cart,
    Wishlist: Wishlist,
    Theme: Theme,
    Settings: Settings
  };
  const ActiveComponent = components[activeComponent]

  const userName = logeduser.length ? user.find((dt) => dt.name) : { name: 'user' };

  return (
    <div className='u-container'>
      <div className="u-left-section">
        <div className="user-det">
          <div className="u-logo">
            <CiUser />
          </div>
          <div className="u-name">
            {userName.name}
          </div>
        </div>
        <div className="u-menu">
          <ul>
            <li onClick={() => handleComponent('Theme')}>
              <span><PiPaintBrushBroadFill /></span>
              Theme
            </li>
            <li onClick={() => handleComponent('Wishlist')}>
              <span><FaRegHeart /></span>
              Wishlist
            </li>
            <li onClick={() => handleComponentCart("Cart")}>
              <span><PiShoppingCartThin /></span>
              Cart
            </li>
            <li>
              <span><PiTruckLight /></span>
              My Orders
            </li>
            <li onClick={() => handleComponent('Settings')}>
              <span><IoSettingsOutline /></span>
              Settings
            </li>
            <li>
              <span><IoArrowUndoOutline /></span>
              Sign Out
            </li>
          </ul>
        </div>
      </div>
      <div className="u-right-section">
        <ActiveComponent />
      </div>
    </div>
  )
}

export default User