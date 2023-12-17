import React from 'react'
import './reklam.scss'
import ReklamTimer from '../ReklamTime'
import { Link } from 'react-router-dom'
import ReklamImg from '../../images/reklamImg.png'

function Reklam() {
  return (
    <div className='reklam'>
        <div className="reklamLeftbox">
            <h4>Categories</h4>
            <h2>Enhance Your Music Experience</h2>
            <div className="crclesBox">
            <ReklamTimer/>
            </div>
            <div className="reklamBtnBox">
            <Link style={{textDecoration:"none"}}>
            <div className="reklamBtn">
                <p>Buy Now</p>
            </div>
            </Link>
            </div>
        </div>
        <div className="reklamRightBox">
            <img src={ReklamImg} alt="" />
        </div>
    </div>
  )
}

export default Reklam