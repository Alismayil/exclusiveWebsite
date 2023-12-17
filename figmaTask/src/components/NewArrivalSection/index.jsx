import React from 'react'
import './newArrival.scss'
import newArrivalImg1 from "../../images/newArrivalImg1.png"
import { Link } from "react-router-dom";
import newArrivalIconImg1 from "../../images/newArrivalIconImg1.png"
import newArrivalIconImg2 from "../../images/newArrivalIconImg2.png"
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function NewArrival() {
  return (
    <section id='newArrival'>
      <div className="newArrivalUpBox">
        <div className="todaysText">
          <div className='normalBox'></div>
          <p>Featured</p>
        </div>
        <div className='salesTimer'>
          <h1>New Arrival</h1>
        </div>
      </div>
      <div className="newArrivalMiddleBox">

        <div class="newArrivalLeftBox">
          <div className="newArrivalLeftBoxText">
            <h1>PlayStation 5</h1>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <Link style={{ textDecoration: "none" }}>
              <div className="newArrivalLeftBoxBtn">
                <p>Shop Now</p>
              </div>
            </Link>
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1703462400&Signature=FXncaC-Sz-OpESWpBHi99V6ubOQ26UGLYcGgSL1HCy~s4Kwa~kmbwu9JJ5CweA530otcQnpTH0qp~ztbeI3-lE5fD7QYLt4DZlH8ZyikJKhMDGaXgXXlBKgA34P7ywznKKJYaGk-G~KYWlQXiM5YvM~Ql6NULV~YLKFZdTA~t9z3cGV4CyRhWFGT237N1gtvandSoBYPQFNgBJvcW-QT9FEVD71dQzhxXosXTwLnJTI-yBMWO8FpR1-1euh4e86cs9whZxr3I0uHHuzeua4cqENhvOAn2Grjc6eoLKvBblzfTzxpu3W8~YzvqjNycp~vCOx~EtAgRkN2qy88ebzswA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div class="newArrivalRightBox">
          <div class="newArrivalImgBox1">
            <div className="newArriwalBox1Text">
              <div className="newArrivalText">
                <h1>Women’s Collections</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <Link style={{ textDecoration: "none" }}>
                  <div className="newArrivalLeftBoxBtn">
                    <p>Shop Now</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="newArriwalImg1">
              <img src={newArrivalImg1} alt="" />
            </div>
          </div>
          <div className="newArrivalSmallBox">
            <div class="newArrivalImgBox2">
              <div className="newArrivalImgBox2Text">
                <h1>Speakers</h1>
                <p>Amazon wireless speakers</p>
                <Link style={{ textDecoration: "none" }}>
                  <div className="newArrivalLeftBoxBtn">
                    <p>Shop Now</p>
                  </div>
                </Link>
              </div>
              <img src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1703462400&Signature=FjXKOaSha~p4pL5bHUyheEolG1yGsZtsOlu9Me0tDZBU8FnHVemZhgzdJwIz9WUZyzUE6mFJ9cmx0xQYx7fKaOCDw7sPcu7f2oE1PkXqCrO5eh7dGbaLLjf-UwGrzT7oz3DK2y6uInPkEoA~9Bl4DVnkM8nEHi6RXg3aGSNcjRf0YdqauCC767UenVPdCXx-vPx9Ilq7JRssiEMiJI13NrraEVHt8i267uIX~pWujxHOryBL59A8t8VGhgRLSWfQqX00-VdYu9qmvHVd4O5I4p18-FEVwL~2SdMbTC2KKf-u398yswJIX1D1sGNBXmaXoKDVo0yvvy2nFs3An2b4uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div class="newArrivalImgBox3">
              <div className="newArrivalImgBox2Text">
                <h1>Perfume</h1>
                <p>GUCCI INTENSE OUD EDP</p>
                <Link style={{ textDecoration: "none" }}>
                  <div className="newArrivalLeftBoxBtn">
                    <p>Shop Now</p>
                  </div>
                </Link>
              </div>
              <img src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1703462400&Signature=DRf4JHB6~E7y5uSdtkX3iA2YH34x3DGAxJIsrx5NOLla1cr-BYtfyzdiI8u3kVGzdTozpYLI5FIF9JS~raulAkntApIYkbNZgjh1eruo1-ok0jNeHBFJVFc~uQ5HLKRCp4~ZaRjBES0Uc-H653iF6VT~BVgG5jCBI3LJl59a44X3YCtL7HwP2CHiVJOWqiWyLb~BVcBcWSTvRN~pnRxmttn8FA~14U14LPFy8j0CDZk2qiRIVf-a6oCdPNlLJCVCDmqMG2ldZFpxBPIo~8uAG4ffiA1L7qwmgpAv7LOuZPrITtGnRp5oTM0n4JeD4NwvXXFS2zbGAfBwlVLVRh~3Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
          </div>
        </div>
      </div>
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

export default NewArrival