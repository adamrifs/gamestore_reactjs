import React, { useContext, useEffect } from 'react'
import { mycontext } from '../context'
import './adminusers.css'
import Login from '../registration/login'

function Adminusers() {
    const { user, setuser, logeduser, setlogeduser, blocked,setblocked } = useContext(mycontext)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    function handleBlock(userid) {
        setblocked( prevState => ({
            ...prevState,
            [userid]: !prevState[userid]
        }))
    }
    console.log('blocked user ====',blocked)
    return (
        <div className='a-user-main-cont'>
            <div className="user-cont">
                {
                    user.map((dat,index) =>
                        <div className='a-u-card' key={index}>
                            <div className="a-u-name">
                                <span>username : </span> {dat.name}
                            </div>
                            <div className="a-u-email">
                            <span>email : </span> {dat.email}
                            </div>

                            <div className="a-u-btn">
                                <button onClick={() => handleBlock(index)}>
                                    {blocked[index]? 'Unblock' : 'Block'}
                                </button>
                            </div>
                        </div>
                       
                     ) 
                 } 
            </div>
        </div>
    )
};

export default Adminusers