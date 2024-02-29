import React from 'react'
import './NewArrival.css' 
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import Card2 from '../Card2/Card2'
import img1 from '../../assets/images/4.png'
import img2 from '../../assets/images/6.png'
import img3 from '../../assets/images/7.png'

const NewArrival = () => {
  return (
    <div className='new-arrival-container' >
       <div className='new-arrival-carts' >
            <h2 className='new-arrival-best-selling' >BEST SELLING</h2>
            <div className="new-arrival-card-flex">
             <Card2 img={img1} />
             <Card2 img={img2}/>
             <Card2 img={img3}/>
            </div>

          </div>
        <div className="new-arrival-banner">
            <img src={banner1} className='new-arrival-img1 img' alt="" />
            <div className="new-arrival-img2_1">
            <img src={banner2} className='new-arrival-img2 img' alt="" />
            </div>
        </div>
    </div>
  )
}

export default NewArrival