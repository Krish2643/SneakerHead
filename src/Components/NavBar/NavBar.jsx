import React, { useContext, useEffect, useState } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useCart } from "react-use-cart";
import logo from '../../assets/images/logo_trial.png'
import { LoginContext } from '../../App'

const NavBar = () => {

  const {isLogin, signOut, logIn} = useContext(LoginContext);
  const signout = ()=>{
      signOut();
  }
  
  // useEffect(()=>{

  // }, [isLogin])

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    emptyCart,
    removeItem,
    updateItemQuantity,
  } = useCart();

  return (
    <div className='nav-container' >
        <div className="nav-logo">
        <NavLink to='/' className='men' >
          <img  className='nav-logo-img' src={logo} alt="logo" />
        </NavLink>
        </div>
        <div  className="nav-options">
               <ul className='nav-list'> 
                <li><NavLink to='/' className='men' >Home</NavLink></li>
                <li><NavLink to='/men' className='men' >Products</NavLink></li>
              <li><NavLink to='/contact' className='men'>Contact</NavLink></li>
               {
                isLogin === "true" ?
                 <li><NavLink to='/' className='men' onClick={signout} >Logout</NavLink></li> : <li><NavLink to='/signin' className='men' >Login</NavLink></li>
               } 
              </ul>
        <div className="nav-fav"> 
        <FontAwesomeIcon className='nav-fav-icon1' icon={faHeart} /> 
        <NavLink to='/cart' >
        <FontAwesomeIcon className='nav-fav-icon1 nav-icon-num' icon={faCartShopping} />
         <span className='nav-fav-icon1-number'>{totalItems}</span>
        </NavLink>
        <FontAwesomeIcon className='nav-fav-icon2' icon={faBars} />
        </div>
        </div>
    </div>
  )
}

export default NavBar