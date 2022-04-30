import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import CartLogo from '../../images/cart.png';
import { Overlay } from "../Overlay/Overlay";


const Header = () => {
  return (
    <>
    <Overlay/>
    <div className="header_body">
      <div className="header_container">
        <div className="header_content">
          <div className="header_left">
            <div className="header_left-logo">
              <h3><Link to='/'>SHOPMED</Link></h3>
            </div>
            <div className="header_left-links">
              <div><NavLink activeClassName='active' className='left-link' to="/">MEDICINES</NavLink></div>
              <div><NavLink activeClassName='active' className='left-link' to="/online-doctor-consultation">ASK DOCTOR</NavLink></div>
              <div><NavLink activeClassName='active' className='left-link' to="/coronavirus-covid19">COVID-19</NavLink></div>
              <div><NavLink activeClassName='active' className='left-link' to="/ayurveda">AYURVEDA</NavLink></div>
              <div><NavLink activeClassName='active' className='left-link' to="/subscriptions">CARE PLAN</NavLink></div>
            </div>
          </div>
          <div className="header_right">
            <div className="header_right-links">
              <div className="header_right-links_auth">
                <div className="header_right-links_auth__login">Login</div>
                <div className="header_right-links_auth__signup">Sign Up</div>
              </div>
              <div className="header_right-links_offers">
                <NavLink className='right-link' to="/offers">Offers</NavLink>
              </div>
              <div className="header_right-links_cart">
                <NavLink to="/cart"><img src={CartLogo} style={{width:'24px'}} alt=""/></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
