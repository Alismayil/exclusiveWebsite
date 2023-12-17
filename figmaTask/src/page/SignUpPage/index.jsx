import React from 'react'
import './signUp.scss'
import GoogleIcon from '../../images/GoogelIcon.png'
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <section id='signUpPage'>
      <div className="signUpLeftBox">
        <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1703462400&Signature=nKEwCyRvEmZm6HugUvka3eT5IFLfeK8SyfvoInRtqA9ATUWRc-yt7P0fH75hfO-xPHOeOtuH72PmYjB4FkSxPIbYxDbsGA6ShmFfmhqSPUuiBFpzHS7bYKzUkP3tw5GUMOgYnDCKnw8PMKtJAWhcdnsQYjr3T1JHZ0ZUVsseQeCdFzIM7xVfjfnAEQ9t8nFILMB6~ftbsDW0d-lp-V1qdKtyPFmtYA2ykoIdXEDTJlVTmAY-O6F2csHFS81CHf9IPToNfLx0zsdHu8hsXqdBmnAQ334~tTrwmnJfUt8jLghL3gORo4O7V0IOxp7Yb~rgUfYIfJzwPmzYCY3abxN5jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
      <div className="signUpRightBox">
        <div className="logUpBox">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form action="" style={{ display: "flex", flexDirection: 'column' }}>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email or Phone Number' />
            <input type="password" placeholder='Password' />
          </form>
          <div className="crateAccountBtn">
          <Link to={"/account"} style={{textDecoration:"none", color:"white"}}>Create Account</Link>
          </div>
          <div className="signUpGoogle">
            <img src={GoogleIcon} alt="" />
            <Link style={{textDecoration:"none", color:"black"}}>Sign up with Google</Link>
          </div>
          <div className="logInBox">
            Already have account?
            <Link to={"/logIn"}><span>Log in</span></Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SignUpPage