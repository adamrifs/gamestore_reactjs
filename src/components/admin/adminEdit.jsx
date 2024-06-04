import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mycontext } from '../context'
import { Link } from 'react-router-dom'
import './adminedit.css'
function AdminEdit() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const navigate = useNavigate()
    const { game, setgame, mobile ,setmobile} = useContext(mycontext)
    const { type, id } = useParams()
    const [editprod, seteditprod] = useState({})

    useEffect(() => {
        const games =  game.find((dt) => dt.type === type && dt.id ===  parseInt(id)) ;
        const mobiles = mobile.find((mob) => mob.type === type && mob.id === parseInt(id));
        seteditprod(games || mobiles)

    }, [])
    function handleSubmit() {
        if(editprod.type === 'pc'){
            const editedgameindex = game.findIndex((dt) => dt.id === editprod.id)
            const editedgame = [...game];
            editedgame[editedgameindex] = editprod;
            setgame(editedgame)
            navigate('/admin')
        }else if(editprod.type === "mb"){
            const updateindex = mobile.findIndex((mvalue)=> mvalue.id === editprod.id)
            const updatedgame = [...mobile];
            updatedgame[updateindex] =editprod;
            setmobile(updatedgame)
            navigate('/admin')
        }
    }
    console.log('type', type, 'id', id)

    return (
        <div className='edit-container'>
             <Link to={'/admin'}>
                <button className='a-back-btn'>Back</button>
            </Link>
            <div className="edit-box">
                <div className="edit-image">
                    <div className="edit-image-cont">
                        <img src={editprod.image} alt='image' />
                    </div>
                    <div className="edit-image-input">
                        Image Url:
                        <input type='text'
                            id='image-inp'
                            value={editprod.image}
                            onChange={(e) => seteditprod({ ...editprod, image: e.target.value })} />
                    </div>
                    <div className="edit-logo-input">
                   Logo Url:
                    <input type='text'
                    id='logo-inp'
                    value={editprod.logo}
                    onChange={(e) => seteditprod({...editprod,logo: e.target.value})}/>
                   </div>
                </div>
                <div className="edit-right">
                    <div className="edit-name">
                        Name:
                        <input type='text'
                            id='editname'
                            value={editprod.name}
                            onChange={(e) => seteditprod({ ...editprod, name: e.target.value })} />
                    </div>
                    <div className="edit-price">
                        Price:
                        <input type='text'
                            id='editprice' value={editprod.price}
                            onChange={(e) => seteditprod({ ...editprod, price: e.target.value })} />
                    </div>
                    <div className="edit-cat">
                        Category:
                        <input type='text'
                            id='editcat'
                            value={editprod.Category}
                            onChange={(e) => seteditprod({ ...editprod, Category: e.target.value })} />
                    </div>
                    <div className="edit-desc">
                        Description:
                        <textarea id='editdesc'
                            rows={5}
                            cols={60}
                            value={editprod.description}
                            onChange={(e) => seteditprod({ ...editprod, description: e.target.value })}>
                        </textarea>
                    </div>
                    <div className="submit-btn">
                        <button className="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEdit