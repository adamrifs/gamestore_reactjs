import React, { useContext , useEffect} from 'react'
import { mycontext } from '../context'
import './adminmob.css'
import { useNavigate } from 'react-router-dom'

function Adminmobgames() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const { mobile, setmobile } = useContext(mycontext)
  function handlemobedit(game) {
    navigate(`/admin/adminEdit/${game.type}/${game.id}`)
  }
  function handlemobdelete(prod) {
    const deletedmob = mobile.filter((dt) => dt.id !== prod.id)
    setmobile(deletedmob)
  }
  const gotoAdd = () => {
    navigate('/adminadd')
  }
  return (
    <div className='a-mb-box'>
      <div className="a-mob-add-btn">
        <button className='mob-add' onClick={gotoAdd}>
          Add Game
        </button>
      </div>
      <div className='a-mob-box'>
        {
          mobile.map((mb) =>
            <div className="a-mb-card">
              <div className="a-mb-image">
                <img src={mb.image} />
              </div>
              <div className="a-mb-g-name">{mb.name}</div>
              <div className="a-mb-g-price">Price: {mb.price} </div>
              <div className="a-mb-g-category">Category: {mb.Category} </div>
              <div className="a-mb-g-desc">{mb.description}</div>
              <div className="mb-e-d-btn">
                <button className='a-mb-btn' onClick={() => handlemobedit(mb)} >Edit</button>
                <button className='a-mb-btn' onClick={() => handlemobdelete(mb)}>Delete</button>
              </div>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default Adminmobgames