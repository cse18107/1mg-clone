import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import CartLogo from "../../images/cart.png";
import { Overlay } from "../Overlay/Overlay";
import Address from "../../images/crosshair.png";
import Location from "../../images/placeholder.png";
import Search from "../../images/search (1).png";
import { city } from "../Header/listCity";

const Header = () => {
  const [overlay, setOverlay] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSigUp] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openLoginOverlay = () => {
    setOverlay(true);
    setIsLogin(true);
  };

  const openSignUpOverlay = () => {
    setOverlay(true);
    setIsSigUp(true);
  };

  return (
    <>
      {overlay && isLogin && (
        <Overlay setOverlay={setOverlay} mode={true} setFalse={setIsLogin} />
      )}
      {overlay && isSignUp && (
        <Overlay setOverlay={setOverlay} mode={false} setFalse={setIsSigUp} />
      )}
      <div className="header_body">
        <div className="header_container">
          <div className="header_content">
            <div className="header_left">
              <div className="header_left-logo">
                <h3>
                  <Link to="/">SHOPMED</Link>
                </h3>
              </div>
              <div className="header_left-links">
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/"
                  >
                    MEDICINES
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/online-doctor-consultation"
                  >
                    ASK DOCTOR
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/coronavirus-covid19"
                  >
                    COVID-19
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/ayurveda"
                  >
                    AYURVEDA
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/subscriptions"
                  >
                    CARE PLAN
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="header_right">
              <div className="header_right-links">
                <div className="header_right-links_auth">
                  <div
                    className="header_right-links_auth__login"
                    onClick={openLoginOverlay}
                  >
                    Login
                  </div>
                  <div
                    className="header_right-links_auth__signup"
                    onClick={openSignUpOverlay}
                  >
                    Sign Up
                  </div>
                </div>
                <div className="header_right-links_offers">
                  <NavLink className="right-link" to="/offers">
                    Offers
                  </NavLink>
                </div>
                <div className="header_right-links_cart">
                  <NavLink to="/cart">
                    <img src={CartLogo} style={{ width: "24px" }} alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_search">
        <div className="header_search_container">
          <div className="header_search_container-left">
            <div className="header_search_container-left_input-location_container">
              <div
                className="input-location_container-location-icon"
                style={{ paddingTop: "5px" }}
              >
                <img src={Location} alt="img" />
              </div>
              <input
                className="input-location_container-location-input"
                placeholder="Enter Your City"
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
              ></input>
              <div
                className="input-location_container-location-address-icon"
                style={{ paddingTop: "5px"}}
              >
                <img src={Address} alt="img"   style={{cursor:"pointer"}}/>
              </div>
              {showDropDown && (
                <div className="input-location_container-location-address-dropdown">
                  {city.map((city) => {
                    return city === "TOP CITIES" || city === "ALL CITIES" ? (
                      <div className="list-div-all">
                        <p className="list-para-all">{city}</p>
                      </div>
                    ) : (
                      <div className="list-div">
                        <p className="list-para">{city}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="header_search_container-left_input-item_container">
              <input                 
                className="header_search_container-left_input-item_container-input"
                placeholder="Search for Medicines and Health Products">

                </input>
              <img src={Search} alt="" style={{cursor:"pointer"}}/>
            </div>
          </div>
          <div className="header_search_container-right">
            <button className="header_search_container-right__button">Upload</button>
          </div>
        </div>
      </div>
      <div className="header_dropdown_body">
        <div className="header_dropdown_body_container">
          
        </div>
      </div>
    </>
  );
};

export default Header;
