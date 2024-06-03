import React from 'react'
import './settings.css'
import { Link } from 'react-router-dom'

function Settings() {
    return (
        <div className='settings-cont'>
            <div className="set-contents">
                <div className="set-to-admin">
                    <Link to={'/adminlogin'}>
                        Admin
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Settings