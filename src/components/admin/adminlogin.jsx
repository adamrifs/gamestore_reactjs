import React, { useState } from 'react'
import './adminlogin.css'
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { GiDirectionSign } from "react-icons/gi";
import { PiArrowsDownUp } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Adminlogin() {

    const navigate = useNavigate()
    const [adminlog, setadminlog] = useState([])
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const loged = {email,password}

    function handleAdd(){
        if(email === 'admin' && password === 'admin'){
            setadminlog([...adminlog,loged])
            Swal.fire({
                title: 'Admin login succesfull',
                icon: 'success',
                confirmButtonText: 'Back',
              })
            navigate('/admin')
        }else{
            Swal.fire({
                title: 'Login failed',
                text: 'Please try again !',
                icon: 'error',
                confirmButtonText: 'Retry',
              })
        }
    }

    console.log('input :', adminlog )
    return (
        <div className="a-l-m-box">
            <div className="admin-l-m-container">
                <div className="a-l-heads">
                    Admin Login
                </div>
                <div className="a-l-input-fields">
                    <div className="a-l-field">
                        <input type='email'
                            placeholder='Enter email'
                            onChange={(e) => setemail(e.target.value)} />
                        <span className='a-l-icon'><IoPersonSharp /></span>

                    </div>
                    <div className="a-l-field">
                        <input type='password'
                            placeholder='Enter password'
                            onChange={(e) => setpassword(e.target.value)} />
                        <span className='a-l-icon'><FaLock /></span>

                    </div>

                    <div className="a-l-forgot-btn">
                        <p>forgot password ?</p>
                    </div>
                    <div className="a-l-log-btn">
                        <button onClick={handleAdd}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminlogin