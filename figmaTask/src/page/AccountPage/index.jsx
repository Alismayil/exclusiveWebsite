import React from 'react'
import './account.scss'
import { Link } from 'react-router-dom'

function Account() {
    return (
        <section id='account'>
            <div className="accountUp">
                <h1>Welcome!</h1>
                <h1 style={{ color: "#DB4444" }}>Kimse</h1>
            </div>
            <div className="accountDown">
                <div className="accountDownLeftBox">
                    <ul>
                        <ul>Manage My Account</ul>
                        <Link style={{textDecoration:"none"}}>
                        <li style={{color:"#DB4444"}}>My Profile</li>
                        </Link>
                        <Link style={{textDecoration:"none"}}>
                        <li>Address Book</li>
                        </Link>
                        <Link style={{textDecoration:"none"}}>
                        <li>My Payment Options</li>
                        </Link>
                        <ul>My Orders</ul>
                        <Link style={{textDecoration:"none"}}>
                        <li>My Returns</li>
                        </Link>
                        <Link style={{textDecoration:"none"}}>
                        <li>My Cancellations</li>
                        </Link>
                        <ul>My WishList</ul>
                    </ul>
                </div>
                <div className="accountDownRightBox">
                    <div className="downRightUpBox">
                        <h1>Edit Your Profile</h1>
                    </div>
                    <div className="downRightMiddleBox">
                        <div className="accountInputAndTextBox">
                            <p>First Name</p>
                            <input type="text" placeholder='Md' />
                        </div>
                        <div className="accountInputAndTextBox">
                            <p>Last Name</p>
                            <input type="text" placeholder='Rimel' />
                        </div>
                        <div className="accountInputAndTextBox">
                            <p>Email</p>
                            <input type="email" placeholder='rimel1111@gmail.com' />
                        </div>
                        <div className="accountInputAndTextBox">
                            <p>Address</p>
                            <input type="text" placeholder='Kingston, 5236, United State' />
                        </div>
                    </div>
                    <div className="downRightDownBox">
                        <p>Password Changes</p>
                        <input type="text" placeholder='Current Passwod' />
                        <input type="text" placeholder='New Passwod' />
                        <input type="text" placeholder='Confirm New Passwod' />
                    </div>
                    <div className="downRightDownBtnBox">
                        <div className="cancelBtn">
                            Cancel
                        </div>
                        <div className="saveChangesBtn">
                        Save Changes
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Account