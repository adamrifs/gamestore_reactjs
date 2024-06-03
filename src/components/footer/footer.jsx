import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";

function Footer() {
    return (
        
            <footer>
                <div className="f-content">
                    <div className="f-box-1">
                        <div className="f-cname">
                            <h2>Fornax</h2>
                        </div>
                        <div className="f-cp">
                            <p>The complete Gaming store</p>
                        </div>
                    </div>

                    <div className="f-box-2">
                        <ul>
                            <li className='f-Prod'>Products</li>
                            <li>Web</li>
                            <li>App</li>
                            <li>Ecommerce</li>
                            <li>Software</li>
                        </ul>
                    </div>
                    <div className="f-box-3">
                        <ul>
                            <li className='f-Comp'>Company</li>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                            <li>UX Research</li>
                        </ul>
                    </div>
                    <div className="f-box-4">
                        <div className="f-gt">
                            <h2>Get in touch</h2>
                            <div className="f-gt-social-icons">
                                <div className="fgt-ic"><FaFacebookSquare /></div>
                                <div className="fgt-ic"><FaSquareXTwitter /></div>
                                <div className="fgt-ic"><FaLinkedin /></div>
                            </div>
                        </div>
                        <div className="f-cdesc">
                            <p>
                                © 2024 Fornax. All rights reserved. Fornax, a leader in innovative solutions, continues to redefine
                                possibilities across industries. With a commitment to excellence and forward-thinking strategies,
                                Fornax remains at the forefront of technological advancement. Our dedication to quality and customer
                                satisfaction drives every aspect of our business. Fornax, the Fornax logo, and any other Fornax product or
                                service names mentioned herein are trademarks or registered trademarks of Fornax. Join us on our journey to shape the future.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="f-design">
                <p><LiaCopyright /> 2024 Developed by <span>Adam</span></p>
                </div>
            </footer>
       
    )
}

export default Footer