import { useState } from 'react';

import './Styles.css';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useLocation } from 'react-router-dom';
import logo from '../assets/cricbuzz-logo.svg';
import logo1 from '../assets/cb_logo_plus_color.svg';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  logo: {
    width: '100px',
    height: '40px',
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  logo1: {
    width: '100px',
    height: '40px',
    marginTop: '5px',
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const OtpPage = () => {
  const [active, setActive] = useState(location.pathname.substring(1));
  const classes = useStyles();
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('here');
  };
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: '#009270',
        }}>
        <Toolbar>
          <div>
            <Link to="/">
              <img
                src={logo}
                onClick={() => {
                  setActive('login');
                  navigate('/login');
                }}
                className={classes.logo}
                alt="team image"
                fetchpriority="high"
              />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '70px',
          margin: 'auto',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            height: '70px',
            margin: 'auto',
          }}>
          <div
            style={{
              display: 'flex',
            }}>
            <p id="p2">Home -- </p>
            <span></span>
            <p id="p3">Account </p>
          </div>
          <img
            src={logo1}
            onClick={() => {
              setActive('login');
              navigate('/login');
            }}
            className={classes.logo1}
            alt="team image"
            fetchpriority="high"
          />
        </div>
        <div id="logindiv">
          <h4 id="h1">Enter the 6 digit OTP</h4>
          <p id="loginp">OTP sent to your email id</p>

          <div id="cnum">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <Link to="/crickbuzzplus">
            <button id="btns">SUBMIT</button>
          </Link>
          <div>
            <p id="rept">
              <a id="reotp" href="">
                RESEND OTP
              </a>
            </p>
          </div>
        </div>
        <div id="lath">
          <p id="rept">
            <a id="reotp" href="">
              Need help?
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
