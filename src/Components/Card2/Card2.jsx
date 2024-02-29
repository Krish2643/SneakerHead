import React from 'react'
import './Card2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card2 = (props) => {
  return (   
            <div className="new-arrival-cart">
                <img src={props.img} className='new-arrival-cart-img' alt="" />
                <div className="new-arrival-description">
                    <h3 className="new-arrival-title">Air 1</h3>
                    <p className='new-arrival-price' > <del>$200</del> - $150 </p>
                    <p className="new-arrival-company">Nike</p>
                    <FontAwesomeIcon className='new-arrival-icon' icon={faStar} />
                    <FontAwesomeIcon className='new-arrival-icon' icon={faStar} />
                    <FontAwesomeIcon className='new-arrival-icon' icon={faStar} />
                    <FontAwesomeIcon className='new-arrival-icon' icon={faStar} />          
                </div>
            </div>
  )
}

export default Card2