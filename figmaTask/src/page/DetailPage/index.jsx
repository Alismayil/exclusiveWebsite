import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import './detailPage.scss'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import deliveryImg1 from "../../images/deliveryImg1.png"
import deliveryImg2 from "../../images/deliveryImg2.png"
import { useDispatch, useSelector } from 'react-redux';
import { wihlsitAdd } from '../../toolkit/WishlistRedux/wishlistSlices';
import { basketAdd, basketAddCount } from '../../toolkit/BasketRedux/basketSlice';

function DetailPage() {
    const { _id } = useParams()
    const [product, setProduct] = useState([])

    const [count, setCount] = useState(1)

    const [imgChange, setimgChange] = useState()

    const wishlistArr=useSelector(state=>state.wishlist.value)
    const basketArr=useSelector(state=>state.basket.value)
    const dispatch=useDispatch()

    const baseUrl = `http://localhost:4000/flash/${_id}`
    console.log(baseUrl);

    async function FetchData() {
        const res = await axios.get(`${baseUrl}`)
        setProduct(res.data)
        setimgChange(res.data.image)

    }

    useEffect(() => {
        FetchData()
    }, [_id])


    function handleRating(rating) {
        const arr = []
        const isQaliq = rating % 1
        let deyer = 0
        if (isQaliq) {
            rating -= 0.5
            deyer = 1
        }
        for (let i = 0; i < rating; i++) {
            arr.push(1)
        }
        if (isQaliq) {
            arr.push(2)
        }
        for (let i = 0; i < 5 - rating - deyer; i++) {
            arr.push(0)
        }
        return arr
    }

    function handleDecremenet() {
        const data=count=>count-1
        if (count === 0) {
            return
        }
        setCount(data)
    }

    function handleIncrement() {
        const data=count=>count+1
        setCount(data)
    }
    
    return (
        <div className='detailPage'>
            <div className="detailPageLeftBox">
                <div className="smallImgagesBox">
                    <div className="smallImg">
                        <img src={product.smallImg1} onClick={() => setimgChange(product.smallImg1)} style={{ transform: "rotateY(-180deg)" }} alt="" />
                    </div>
                    <div className="smallImg">
                        <img src={product.smallImg2} onClick={() => setimgChange(product.smallImg2)} style={{ transform: "rotateY(-180deg)" }} alt="" />
                    </div>
                    <div className="smallImg">
                        <img src={product.smallImg3} onClick={() => setimgChange(product.smallImg3)} alt="" />
                    </div>
                    <div className="smallImg">
                        <img src={product.smallImg4} onClick={() => setimgChange(product.smallImg4)} style={{ maxWidth: "87%" }} alt="" />
                    </div>
                </div>
                <div className="bigImageBox">
                    <div className="bigImages">
                        <img src={imgChange} alt="" />
                    </div>
                </div>
            </div>
            <div className="detailPageRightBox">
                <div className="centerBox">
                    <div className="upTextBox">
                        <h1>{product.name}</h1>
                        <div className="raitingBox">
                            <p> 
                            {handleRating(product.rating).map(x => {
                                            if (x === 1) {
                                                return <i class="fa-solid fa-star" style={{color:"#FFAD33"}}></i>
                                            }
                                            else if (x === 2) {
                                                return <i class="fa-regular fa-star-half-stroke" style={{color:"#ffAD33"}}></i>
                                            }
                                            return <i class="fa-regular fa-star"style={{color:"gray"}}></i>

                                        })}
                            </p>
                            <p>({product.comment} Reviews)</p>
                            <p>|</p>
                            <p style={{ color: "#00ff66b4" }}>In Stock</p>
                        </div>
                        <p style={{ marginTop: "19px" }}>${product.newPrice}.00</p>
                        <span>
                            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                        </span>
                    </div>
                    <div className="downTextBox">
                        <div className="colorBox">
                            <p>Colours:</p>
                            <form action="">
                                <input type="radio" />
                                <input type="radio" />
                            </form>
                        </div>
                        <div className="sizeBox">
                            <p>Size:</p>
                            <div className="oneSizeBox">XS</div>
                            <div className="oneSizeBox">S</div>
                            <div className="oneSizeBox">M</div>
                            <div className="oneSizeBox">L</div>
                            <div className="oneSizeBox">XL</div>
                        </div>
                        <div className="counterBox">
                            <div className="countBox">
                                <div className="decBox" onClick={()=>handleDecremenet()}>
                                    <p>_</p>
                                </div>
                                <div className="numBox">{count}</div>
                                <div className="incBox" onClick={()=>handleIncrement()}>+</div>
                            </div>
                            <div className="buyBox" onClick={()=>dispatch(basketAddCount({...product, count:count}))}>Buy Now</div>
                            <div className="likeBox" onClick={()=>dispatch(wihlsitAdd(product))}>
                            {wishlistArr.find(x=>x._id === product._id)? <FaHeart style={{color:"#DB4444"}} /> : <FaRegHeart />}
                            </div>
                        </div>
                    </div>
                    <div className="deliveryBox">
                        <div className="deliveryUpBox">
                            <div className="deliveryBoxLeftBox">
                                <img src={deliveryImg1} alt="" />
                            </div>
                            <div className="deliveryBoxRightBox">
                                <p>Free Delivery</p>
                                <p style={{ fontSize: '16px' }}>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="deliveryDownBox">
                            <div className="deliveryBoxLeftBox">
                            <img src={deliveryImg2} alt="" />
                            </div>
                            <div className="deliveryBoxRightBox">
                            <p>Return Delivery</p>
                                <p style={{ fontSize: '16px' }}>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage