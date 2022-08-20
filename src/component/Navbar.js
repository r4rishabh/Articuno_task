import React, { useState } from "react";
import "./navbar.css";
import {
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiOutlineArrowLeft
} from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { FiTruck } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

// import { ReactCountryDropdown } from 'react-country-dropdown'
// import 'react-country-dropdown/dist/index.css'


// const handleSelect = (country) => {
//     console.log(country)
//     /* returns the details on selected country as an object
//         {
//           name: "United States of America", 
//           code: "US", 
//           capital: "Washington, D.C.", 
//           region: "Americas", 
//           latlng: [38, -97]
//         }
//     */
// }

const Navbar = () => {




    const [Icons, setIcons] = useState(false);
    return (
        <div>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2>
                        <span style={{ "color": "#F4BE2C" }}>E-</span>
                        <span>Shop</span>

                    </h2>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        Icons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <Link to="#">Men</Link>
                        </li>
                        <li>
                            <Link to="#">Women</Link>
                        </li>
                        <li>
                            <Link to="#">Kids</Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="icons">
                    <ul className="icons-desktop">
                        <li>
                            <Link to="#">
                                <AiOutlineSearch />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <AiOutlineShoppingCart />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <IoIosPerson />
                            </Link>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <Link to="#" onClick={() => setIcons(!Icons)}>
                            <GiHamburgerMenu />
                        </Link>
                    </div>
                </div>
            </nav>



            <div className="container" style={{ "marginTop": "7rem" }}>

                <div className="main-landing">
                    <div className="shipping">
                        <span>Shipping And Payment</span>
                    </div>
                    <div style={{ "marginRight": "10rem" }}>

                        <button className="cart-input">
                            <img
                                src={require("./images/cart.png")}
                                alt=""
                                className="cart-input-logo"
                            />
                        </button>

                    </div>


                </div>

                <div className="container main-container">


                    <div className="container" >

                        <div className="main-landing1" >
                            {/* <button className="btn joinbtn">
                                <Link to="/login">Login</Link>
                            </button> */}

                            <Link to="/login">
                                <button className="btn joinbtn">
                                    Login
                                </button>
                            </Link>

                            <button className="btn btnSignup" >Signup</button>
                        </div>

                        <div className="shipping1">
                            <span>Shipping Information</span>
                        </div>

                        <div className="Input" id="add">
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                className="inputBox1"
                                placeholder="Address"
                            />
                        </div>
                        <div className="Input">
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="First name"
                            />
                            <input
                                type="text"
                                className="inputBox1"
                                placeholder="City"
                            />
                        </div>
                        <div className="Input">
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="Last name"
                            />
                            <input
                                type="text"
                                className="inputBox1"
                                placeholder="Postal Code/Zip"
                            />
                        </div>
                        <div className="Input">
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="Phone number"
                            />
                            <input
                                type="text"
                                className="inputBox1"
                                placeholder="placeholder"
                            />
                            {/* <ReactCountryDropdown countryCode='IN' /> */}

                        </div>
                    </div>



                    {/* Payment Method Start */}


                    <div className="container" style={{ "marginTop": "5rem" }}>
                        <div className="payment">
                            <span>Payment Method</span>
                        </div >
                        <div className="input1">
                            <button className="btn-icon">
                                <img
                                    src={require("./images/Paypal.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                            </button>
                            <button className="btn-icon1">
                                <img
                                    src={require("./images/Visa.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                            </button>
                            <button className="btn-icon1">
                                <img
                                    src={require("./images/Mastercard.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                            </button>
                        </div>
                        <div className="input1">
                            <button className="btn-icon">
                                <img src={require("./images/Visa.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                            </button>
                            <button className="btn-icon1">
                                <img src={require("./images/Discover.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                            </button>
                            <button className="btn-icon1">
                                <img src={require("./images/Visa.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                            </button>
                        </div>

                        {/* Delivery Method Starts */}

                        <div className="delivery">
                            <span>Delivery Method</span>
                        </div >
                        <div className="input1" style={{ "display": "flex" }}>
                            <button className="btn-icon0" >
                                <img
                                    src={require("./images/Inpost.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                                <h5>$20..00</h5>
                            </button>
                            <button className="btn-icon2">
                                <img
                                    src={require("./images/Dpd.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                                <h5>$20..00</h5>
                            </button>
                        </div>
                        <div className="input1" style={{ "display": "flex" }}>
                            <button className="btn-icon0">
                                <img
                                    src={require("./images/Dhl.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                                <h5>$20..00</h5>
                            </button>
                            <button className="btn-icon2">
                                <img
                                    src={require("./images/Fedex.png")}
                                    alt=""
                                    className="input1-logo"
                                />
                                <h5>$20..00</h5>
                            </button>
                        </div>
                    </div>



                    {/* Your Cart Starts */}


                    <div className="container" style={{ "marginTop": "5rem" }}>
                        < div className="cart">
                            <span>Your Cart</span>
                        </div>

                        <div style={{ "display": "flex" }}>
                            <div style={{ "marginTop": "2rem" }}>
                                <button className="cart-input">
                                    <img src={require("./images/tshirt.png")}
                                        alt=""
                                        className="cart-input-logo"
                                    />
                                </button>
                            </div>
                            <div className="cart0">
                                <div>
                                    <span>Tshirt</span>
                                    <br />
                                    <span>Summer Vibes</span>
                                    <br />
                                    <p style={{ "font-size": "10px" }}>#261311</p>
                                </div>
                                <span className="cart0-span">$89.99</span>
                            </div>
                        </div>

                        <div style={{ "display": "flex" }}>

                            <div style={{ "marginTop": "2rem" }}>
                                <button className="cart-input">
                                    <img
                                        src={require("./images/tshirt1.png")}
                                        alt=""
                                        className="cart-input-logo1"
                                    />
                                </button>
                            </div>
                            <div className="cart1">
                                <div>
                                    <span>Basic Slim</span>
                                    <br />
                                    <span>Fit T-Shirt</span>
                                    <br />
                                    <p style={{ "font-size": "10px" }}>#212315</p>
                                </div>
                                <span style={{ "marginTop": "20px", "marginLeft": "5.5rem" }}>$89.99</span>
                            </div>
                        </div>

                        <div className="main-landing1" >
                            <button className="joinbtn1">Total Cost <h4>159.98</h4></button>
                        </div>
                        <br />
                        <div className="cart2">
                            <FiTruck />
                            <div >
                                <span>You are $30.02 away</span>
                                <br />
                                <br />
                                <span>from free Shipping!!</span>
                            </div>

                        </div>
                    </div>



                </div>

                <div className="last-landing">
                    <div className="shipping">
                        <Link to="#"><AiOutlineArrowLeft style={{ "marginRight": "0.5rem" }} />Back</Link>
                    </div>

                    <div className="last-landing1" >
                        <button className="last-btn">CONTINUE SHOPPING</button>
                        <button className="last-btn1" >PROCEED TO PAYMENT</button>
                    </div>


                </div>
            </div >
        </div >
    );
};

export default Navbar;
