import React from 'react'
import './contact.scss'
import ContactIcon1 from "../../images/contactIcon1.png"
import ContactIcon2 from "../../images/contactIcon2.png"
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <section id='contactPage'>
      <div className="contactLeftBox">
        <div className="contactLeftBoxUp">
          <div className="iconAndText">
            <div className='contactIconBox'>
            <img src={ContactIcon1} alt="" style={{width:"50px"}} />
            </div>
            <h1>Call To Us</h1>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <div className="underline"></div>
        </div>
        <div className="contactLeftBoxDown">
        <div className="iconAndText">
            <div className='contactIconBox'>
            <img src={ContactIcon2} alt="" style={{width:"50px"}} />
            </div>
            <h1>Write To US</h1>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="contactRightBox">
        <div className="contactSmallInputsBox">
          <input type="text" placeholder='Your Name *' />
          <input type="email" placeholder='Your Email *' />
          <input type="number" placeholder='Your Phone *'/>
        </div>
        <div className="contactBigInputBox">
          <input type="text" placeholder='Your Massage' />
        </div>
        
        <Link style={{textDecoration:"none"}}><div className="contactBtn">Send Massage</div></Link>
      </div>
    </section>
  )
}

export default ContactPage