import React, { useContext, useState } from 'react'
import './adminaddgame.css'
import { mycontext } from '../context'
import { Link, useNavigate } from 'react-router-dom'

function Adminaddgame() {
    const { game, setgame,mobile ,setmobile } = useContext(mycontext)
    const navigate = useNavigate()

    const [addprod, setaddprod] = useState({ id: '', type: '', name: '', price: '', description: '', Category: '', image: '', logo: '' })

    console.log(addprod, "addProduct");

    // =======submit button ========
    function handleAdd() {
        if(addprod.type === 'pc'){
            setgame([...game, addprod])
            alert('game added to pc games')
            navigate('/admin')
        }else if(addprod.type === 'mb'){
            setmobile([...mobile,addprod])
            alert('game added to mobile')
            navigate('/admin')
        }
    }
    console.log('games', game)
    return (
        <div className='add-container'>
            <Link to={'/admin'}>
                <button className='a-back-btn'>Back</button>
            </Link>
            <div className="add-box">
                <div className="add-image">
                    <div className="add-image-cont">
                        <img src={addprod.image} alt='image' />
                    </div>
                    <div className="add-image-input">
                        Image Url:
                        <input type='text'
                            id='add-image-inp'
                            value={addprod.image}
                            onChange={(e) => setaddprod({ ...addprod, image: e.target.value })} />
                    </div>
                    <div className="add-logo-input">
                        Logo Url:
                        <input type='text'
                            id='add-logo-inp'
                            value={addprod.logo}
                            onChange={(e) => setaddprod({ ...addprod, logo: e.target.value })} />
                    </div>
                </div>
                <div className="add-right">
                    <div className="add-name">
                        ID:
                        <input type='text'
                            id='addId'
                            placeholder='eg: id: 1'
                            value={addprod.id}
                            onChange={(e) => setaddprod({ ...addprod, id: e.target.value })} />
                    </div>
                    <div className="add-name">
                        Type:
                        <input type='text'
                            id='addtype'
                            placeholder='eg: pc / mb '
                            value={addprod.type}
                            onChange={(e) => setaddprod({ ...addprod, type: e.target.value })} />
                    </div>
                    <div className="add-name">
                        Name:
                        <input type='text'
                            id='addname'
                            placeholder='eg: fortnite ...'
                            value={addprod.name}
                            onChange={(e) => setaddprod({ ...addprod, name: e.target.value })} />
                    </div>
                    <div className="add-price">
                        Price:
                        <input type='text'
                            id='addprice'
                            placeholder='eg: $199 ...'
                            value={addprod.price}
                            onChange={(e) => setaddprod({ ...addprod, price: e.target.value })} />
                    </div>
                    <div className="add-cat">
                        Category:
                        <input type='text'
                            id='addcat'
                            placeholder='eg: Action ...'
                            value={addprod.Category}
                            onChange={(e) => setaddprod({ ...addprod, Category: e.target.value })} />
                    </div>
                    <div className="add-desc">
                        Description:
                        <textarea id='adddesc'
                            placeholder='eg: popular battle royale game. ...'
                            rows={5}
                            cols={60}
                            value={addprod.description}
                            onChange={(e) => setaddprod({ ...addprod, description: e.target.value })}>
                        </textarea>
                    </div>
                    <div className="add-submit-btn">
                        <button className="add-submit" onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminaddgame