import React, { useContext, useState , useEffect} from 'react'
import './admin.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import Adminusers from './adminusers';
import Adminproducts from './adminproducts';
import Adminmobgames from './adminmobgames';
import AdminEdit from './adminEdit';
import { mycontext } from '../context';
import { useNavigate } from 'react-router-dom';

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const gotoback = () =>{
    navigate('/')
  }
  const [activeComponent, setactiveComponent] = useState('user')

  const components = {
    user: Adminusers,
    pcgames: Adminproducts,AdminEdit,
    mobgames : Adminmobgames
  };

  function handlecomponent(listname) {
    setactiveComponent(listname)
  }

  const ActiveComponent = components[activeComponent]
  return (
    <div className='a-container'>
      <div className="a-left-section">
        <div className="a-user-det">
          <div className="a-logo">
            <CiUser />
          </div>
          <div className="a-name">
            Admin
          </div>
        </div>
        <div className="a-menu">
          <ul>
            <li onClick={() => handlecomponent('user')}>
              <span><FaUsers /></span>
              Users
            </li>
            <li onClick={() => handlecomponent('pcgames')}>
              <span><IoGameController /></span>
              PC Games
            </li>
            <li onClick={() => handlecomponent('mobgames')}>
              <span><LuGamepad /></span>
              Mobile Games
            </li>
            <li><span><IoSettingsOutline /></span>
              Settings
            </li>
            <li onClick={gotoback}><span><IoArrowUndoOutline /></span>
              Back
            </li>
          </ul>
        </div>
      </div>
      <div className="a-right-section">
        <ActiveComponent />
      </div>
    </div>
  )
}

export default Admin