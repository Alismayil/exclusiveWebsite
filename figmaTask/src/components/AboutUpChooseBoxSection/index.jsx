import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import './aboutUpChooseBoxSection.scss';

function AboutUpChooseBoxSection() {
  return (
    <section id='aboutUpChooseBoxSection'>
   <div className="newArrivalDownBox">
        <div className="newArrivalIconBox">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
              <AiOutlineShop style={{fontSize:"50px"}} />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>10.5k</h1>
            <p>Sallers active our site</p>
          </div>
        </div>
        <div className="newArrivalIconBox2">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
              <CiDollar  style={{fontSize:"70px", color:"black"}} />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>33k</h1>
            <p>Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className="newArrivalIconBox">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
              <IoGiftOutline style={{fontSize:"55px"}}  />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>45.5k</h1>
            <p>Customer active in our site</p>
          </div>
        </div>
        <div className="newArrivalIconBox">
          <div className="newArrivalImgIconBox">
            <div className="iconCrcleBigBox">
              <div className="iconCrcleSmallBox">
              <FaSackDollar style={{fontSize:"45px"}} />
              </div>
            </div>
          </div>
          <div className="newArrivalTextIconBox">
            <h1>25k</h1>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUpChooseBoxSection