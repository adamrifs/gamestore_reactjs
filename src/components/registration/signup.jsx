import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import { useContext } from 'react'
import { mycontext } from '../context'
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import { LiaFacebookF } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate()
    const loginpage = () => {
        navigate('/login')
    }

    const { user, setuser } = useContext(mycontext)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [errors, seterrors] = useState({})

    // console.log('name',name)
    // console.log('email',email)
    // console.log('pword',password)

    const userExist = user.find(dat => dat.email === email)
    const P_word = document.getElementById('cp_word')
    function handleadd(e) {
        e.preventDefault()
        const validationerror = {}

        if (!name.trim()) {
            validationerror.name = 'username is required'
        }
        if (!email.trim()) {
            validationerror.email = 'email is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationerror.email = 'email is not valid'
        }
        if (!password.trim()) {
            validationerror.password = 'password is required'
        } else if (password.length < 6) {
            validationerror.password = 'password length must be 6 characters'
        }
        if (cpassword !== password) {
            validationerror.cpassword = 'password is not match'
            P_word.focus()
            setcpassword('')
        }

        if (Object.keys(validationerror).length > 0) {
            seterrors(validationerror)
        } else {
            if (userExist) {
                Swal.fire({
                    title: 'email already exist',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
                setemail('')
            } else {
                const userdet = { name, email, password }
                setuser([...user, userdet])
                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
                Swal.fire({
                    title: 'sign up succesfull',
                    icon: 'success',
                    confirmButtonText: 'Back',
                })
                loginpage()
            }
        }
    }
    const handlekeydown = (e) => {
        if (e.key === 'Enter') {
            handleadd(e)
        }
    }
    console.log(user)
    return (
        <div className='s-main-cont'>
            <div className="sg-container">
                <div className="sub-container">
                    {/* sg means 'sign up' */}
                    <div className="sg-heads">
                        Sign up
                    </div>
                    <div className="sg-input-fields">
                        <div className="sg-input">
                            <input type='text'
                                placeholder='username'
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                onKeyDown={handlekeydown} />
                            <span className='sign-input-icons'><IoPersonSharp /></span>
                            {errors.name && <p>{errors.name}</p>}
                        </div>

                        <div className="sg-input">
                            <input type='email'
                                id='E_mail'
                                placeholder='email'
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                onKeyDown={handlekeydown} />
                            <span className='sign-input-icons'><MdEmail /></span>
                            {errors.email && <p>{errors.email}</p>}
                        </div>

                        <div className="sg-input">
                            <input type="password"
                                id='p_word'
                                placeholder='password'
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                onKeyDown={handlekeydown} />
                            <span className='sign-input-icons'><FaLock /></span>
                            {errors.password && <p>{errors.password}</p>}
                        </div>

                        <div className="sg-input">
                            <input type="password"
                                id='cp_word'
                                placeholder='confirm password'
                                value={cpassword}
                                onChange={(e) => setcpassword(e.target.value)}
                                onKeyDown={handlekeydown} />
                            <span className='sign-input-icons'><RiLockPasswordFill /></span>
                            {errors.cpassword && <p>{errors.cpassword}</p>}
                        </div>

                        <div className="sg-signup-btn">
                            <button onClick={handleadd}>Sign in</button>
                        </div>
                    </div>
                    <div className="seperate-line">

                    </div>
                    <div className="social-icons">
                        <div className="sg-footer-icons">
                            <LiaFacebookF />
                        </div>
                        <div className="sg-footer-icons">
                            <FcGoogle />
                        </div>
                        <div className="sg-footer-icons">
                            <BiLogoLinkedin />
                        </div>
                    </div>
                </div>
                <div className="log-container">
                    <div className="lg-heads">
                        <h2>Already have an account ?</h2>
                        <div className="lg-in-icon">
                            <div className="log-in-icon2">
                                <CiLogin />
                            </div>

                            <div className="link-to-login">
                                <Link to={"/login"}><p>Login</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup