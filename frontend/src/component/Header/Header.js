import React,{useState} from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import CartLogo from '../../images/cart.png';
import { Overlay } from "../Overlay/Overlay";
import Address from '../../images/crosshair.png'
import Location from '../../images/placeholder.png'



const Header = () => {



  const [overlay,setOverlay] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [isSignUp,setIsSigUp] = useState(false);
  const [showDropDown,setShowDropDown] = useState(false);

  const openLoginOverlay = () => {
    setOverlay(true);
    setIsLogin(true);
  }

  const openSignUpOverlay = () => {
    setOverlay(true);
    setIsSigUp(true);
  }

  return (
    <>
    {overlay && isLogin && <Overlay setOverlay={setOverlay} mode={true} setFalse={setIsLogin} />}
    {overlay && isSignUp && <Overlay setOverlay={setOverlay} mode={false} setFalse={setIsSigUp}/>}
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
                <div className="header_right-links_auth__login" onClick={openLoginOverlay}>Login</div>
                <div className="header_right-links_auth__signup" onClick={openSignUpOverlay}>Sign Up</div>
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
    <div className="header_search">
      <div className="header_search_container">
        <div className="header_search_container-left">
          {/* <div className="header_search_container-left_input"> */}
            {/* <div className="header_search_container-left_input-location"> */}
              <div className="header_search_container-left_input-location_container">
                <div className="input-location_container-location-icon" style={{paddingTop:"5px"}}><img src={Location} alt="img"/></div>
                <input className="input-location_container-location-input" placeholder="Enter Your City" onClick={()=>{setShowDropDown(!showDropDown)}}></input>
                <div className="input-location_container-location-address-icon" style={{paddingTop:"5px"}}><img src={Address} alt="img"/></div>
                {showDropDown && <div className="input-location_container-location-address-dropdown"></div>}
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className="header_search_container-right"></div>
      </div>
    </div>
    </>
  );
};

export default Header;
