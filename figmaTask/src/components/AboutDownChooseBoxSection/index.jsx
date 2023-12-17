import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import newArrivalIconImg1 from "../../images/newArrivalIconImg1.png";
import newArrivalIconImg2 from "../../images/newArrivalIconImg2.png";
import './aboutdownChooseBoxSection.scss';

function AboutDownChooseBoxSection() {
  return (
    <section id='aboutDownChooseBoxSection'>
   <div className="newArrivalDownBox">
        <div className="newArrivalIconBox">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
                <img src={newArrivalIconImg1} alt="" />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="newArrivalIconBox">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
                <img src={newArrivalIconImg2} alt="" />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="newArrivalIconBox">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
              <AiOutlineSafetyCertificate style={{fontSize:"45px"}} />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>MONEY BACK GUARANTEE</h1>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDownChooseBoxSection