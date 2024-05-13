import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Discover our curated menu of authentic Lebanese dishes, each crafted with premium ingredients and traditional flavors. We aim to delight your palate and enhance your dining experience with every meal. Join us for a truly memorable culinary journey.</p>
        <button onClick={()=>navigate('/#explore-menu')}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
