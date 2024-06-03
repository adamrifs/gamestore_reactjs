import React, { useContext, useState } from 'react'
import './login.css'
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { GiDirectionSign } from "react-icons/gi";
import { mycontext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {

    const navigate = useNavigate()
    const home = ()=>{
        navigate('/')
    }

    const { user, setuser, logeduser, setlogeduser, logout, setlogout ,blocked,setblocked } = useContext(mycontext)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    console.log("login Page", user);

    // console.log(email,password)
    function handleLogin(e) {
        e.preventDefault()
        const userLog = user.find((dat) => dat.email === email && dat.password === password)
        const isblock = blocked[user.indexOf(userLog)]

        if (!isblock && userLog) {
            const logData = { email, password }
            setlogeduser([...logeduser, logData])
            setlogout(logeduser)
            setemail('')
            setpassword('')
            Swal.fire({
                title: 'Login succesfull',
                icon: 'success',
                confirmButtonText: 'Home',
              })
            home()
        } else {
            Swal.fire({
                title: 'Login unsuccesfull',
                icon: 'error',
                confirmButtonText: 'Back',
              })
        }if(isblock){
            Swal.fire({
                title: 'User is Blocked',
                icon: 'error',
                confirmButtonText: 'Back',
              })
        }
    }
    console.log('logeduser', logeduser)
    console.log('loged', logout)
    return (
        <div className='l-main-cont'>
            <div className="container">
                <div className="circle">
                    
                </div>
                <div className="signup-container">
                    <div className="sign-head">
                        <h2>Doesn't have an account yet ?</h2>
                    </div>
                    <div className="inner-sign-cont">
                        <span className='sign-icon'><GiDirectionSign /></span>
                        <div className="sign-link">
                            <Link to={"/signup"}><p>Sign Up</p></Link>
                        </div>
                    </div>

                </div>
                <div className="main-container">
                    <div className="heads">
                        Login
                    </div>
                    <div className="input-fields">

                        <div className="field">
                            <input type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setemail(e.target.value)} />
                            <span className='icon'><IoPersonSharp /></span>

                        </div>
                        <div className="field">
                            <input type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setpassword(e.target.value)} />
                            <span className='icon'><FaLock /></span>

                        </div>

                        <div className="forgot-btn">
                            <p>forgot password ?</p>
                        </div>
                        <div className="log-btn">
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login 