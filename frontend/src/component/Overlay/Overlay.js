import React from "react";
import "./Overlay.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Img_1 from '../../images/login_img_1.png';

export const Overlay = () => {
  return (
    <div className="overlay_body">
      <div className="overlay_container">
        <div className="overlay_content">
          <div className="overlay_left">
            <div className="overlay-left_content">
              <div className="overlay-left_content-img"><img src={Img_1} alt='img'/></div>
              <div className="overlay-left_content-desc"></div>
            </div>
          </div>
          <div className="overlay_right">
            <div className="overlay_right_content">
              <div className="overlay_right_content_name">Login</div>
              <div className="overlay_right_content_desc">
                Get access to your orders, lab tests & doctor consultations
              </div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1,color:'black', width: "40ch", borderBottom:'tomato' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  error
  
                  id="standard-basic"
                  label="Enter Email ID and Mobile Number"
                  variant="standard"
                />
              </Box>
              <button className='overlay_right_login_button'>LOGIN</button>
              <p>New on SHOPMED? <span>Sign Up</span></p>
              <p>Have a corporate account? <span>Click Here</span></p>
              <div>By Login in you are agree to our</div>
              <div>Terms and Conditions & Privacy Policy</div>
              <div>Need Help? Get In Touch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
