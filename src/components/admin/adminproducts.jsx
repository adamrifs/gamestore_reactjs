import React, { useContext } from 'react'
import { mycontext } from '../context'
import { Link, useNavigate } from 'react-router-dom'
import './adminproduct.css'

function Adminproducts() {

    const navigate = useNavigate()

    const { game, setgame } = useContext(mycontext)
    function editprod(prod) {
        navigate(`/admin/adminEdit/${prod.type}/${prod.id}`)
    }
    function deleteprod(dt) {
        const deletedgame = game.filter((product) => product.id !== dt.id)
        setgame(deletedgame)
    // const deletedgame = [...game]
    // deletedgame.splice(dt.id,1)
    // setgame(deletedgame)
    }
    console.log("deletedgame", game)

    const gotoAdd = ()=>{
        navigate('/adminadd')
    }
    return (
        <div className='a-p-main-contain'>
            <div className="a-pc-add-btn">
                <button className='pc-add' onClick={gotoAdd}>
                    Add Game
                </button>
            </div>
        <div className='a-p-box'>
            {
                game.map((dat) =>

                    <div className="a-p-card">
                        <div className="a-p-image">
                            <img src={dat.image} />
                        </div>
                        <div className="a-p-g-name">{dat.name}</div>
                        <div className="a-p-g-price">Price: {dat.price} </div>
                        <div className="a-p-g-category">Category: {dat.Category} </div>
                        <div className="a-p-g-desc">{dat.description}</div>
                        <div className="e-d-btn">
                            <button className='a-p-btn' onClick={() => editprod(dat)}>Edit</button>
                            <button className='a-p-btn' onClick={() => deleteprod(dat)}>Delete</button>
                        </div>
                    </div>

                )
            }
        </div>
        </div>
    )
}

export default Adminproducts