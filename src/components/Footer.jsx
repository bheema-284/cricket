import './styles.css';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import logo from '../assets/cricbuzz-logo.svg';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#4a4a4a',
    color: theme.palette.common.white,
    padding: '.8rem',
  },
  grid: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',
      width: '100%',
    },
  },

  anchor: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  logo: {
    width: '100px',
    height: '40px',
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <p>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <img
                src={logo}
                onClick={() => {
                  setActive('home');
                  navigate('/');
                }}
                className={classes.logo}
                alt="team image"
                fetchpriority="high"
              />{' '}
            </Link>
          </p>
        </div>
        <div>
          <p>MOBILE SITE & APPS</p>
          <LanguageIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a style={{ color: 'white', textDecoration: 'none' }} href="/">
              m.cricbuzz.com
            </a>
          </span>
          <br />
          <AdbIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="https://play.google.com/store/apps/details?id=com.cricbuzz.android">
              Android
            </a>
          </span>
          <br />
          <AppleIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="https://apps.apple.com/app/id360466413">
              iOS
            </a>
          </span>
          <br />
        </div>
        <div>
          <p>FOLLOW US ON</p>
          <FacebookIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="https://www.facebook.com/cricbuzz">
              facebook
            </a>
          </span>
          <br />
          <TwitterIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="https://twitter.com/cricbuzz">
              twitter
            </a>
          </span>
          <br />
          <YouTubeIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="https://www.youtube.com/channel/UCSRQXk5yErn4e14vN76upOw">
              youtube
            </a>
          </span>
          <br />
          <PinterestIcon
            style={{ paddingTop: '12px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="https://in.pinterest.com/cricbuzz/">
              pinterest
            </a>
          </span>
          <br />
        </div>
        <div>
          <p>COMPANY</p>
          <Link
            to="/careers"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginTop: '3px',
            }}>
            <a id="fa">Careers</a>
          </Link>
          <br />
          <Link
            to="/advertise"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginTop: '3px',
            }}>
            <a id="fa">Advertise</a>
          </Link>
          <br />

          <Link
            to="/privacy"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginTop: '3px',
            }}>
            <a id="fa">Privicy Policy</a>
          </Link>
          <br />
          <Link
            to="/termsofuse"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginTop: '3px',
            }}>
            <a id="fa">Terms of Use</a>
          </Link>
          <br />
          <Link
            to="/tvads"
            style={{
              color: 'white',
              textDecoration: 'none',
              marginTop: '3px',
            }}>
            <a id="fa">Cricbuzz TV Ads</a>
            <br />
          </Link>
        </div>
      </div>

      <div style={{ justifyContent: 'center', textAlign: 'center' }}>
        <p style={{ display: 'inline', fontSize: 'small' }}>
          <CopyrightIcon
            style={{ paddingTop: '2px', marginTop: '5px' }}
            fontSize="small"
          />
          <span>
            2022 Cricbuzz.com, Times Internet Limited. All rights reserved | The
            Times of India | Navbharat Times
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
