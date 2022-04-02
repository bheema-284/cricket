import { useState } from 'react';
import { LoginPage } from './LoginPage';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import logo from '../assets/cricbuzz-logo.svg';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    marginTop: '.3rem',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  dropdown: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    minWidth: '160px',
    boxShadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`,
    zIndex: 1,
  },
  menuIcon: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
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
const LoginPages = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};
export const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.substring(1));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMouseOver1 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloses = () => {
    setAnchorE2(null);
  };
  const MobileMenus = (
    <Menu
      className={classes.dropdown}
      id="basic-menu"
      anchorE2={anchorE2}
      open={open}
      onClose={handleCloses}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}>
      <MenuItem onClick={handleCloses}>Profile</MenuItem>
      <MenuItem onClick={handleCloses}>My account</MenuItem>
      <MenuItem onClick={handleCloses}>Logout</MenuItem>
    </Menu>
  );
  //Mobile menu for small screen devices
  const MobileMenu = (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}>
      <MenuItem component={Link} onClick={handleClose} to="/news">
        All stories
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/crickbuzzplus">
        Criccbuzz Plus
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/news">
        Latest News
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/news">
        Topics
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/news">
        Spotlight
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/news">
        Opinions
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/news">
        Specials
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/rankings">
        Stats & Analysis
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/mores">
        Interviews
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/cricbuzzplus">
        Live Blogs
      </MenuItem>
      <MenuItem component={Link} onClick={handleClose} to="/cricbuzzplus">
        Harsha Bhogle
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: '#009270',
        }}>
        <Toolbar>
          <div
            id="menu-bar"
            className={classes.sectionDesktop}
            style={{
              justifyContent: 'space-evenly',
              margin: 'auto',
              width: '100%',
              marginBottom: '10px',
            }}>
            <div>
              <img
                src={logo}
                onClick={() => {
                  setActive('home');
                  navigate('/');
                }}
                className={classes.logo}
                alt="team image"
                fetchpriority="high"
              />
            </div>
            <Link
              to="/livescores"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/livescores"
                onClick={() => {
                  setActive('home');
                }}
                sx={
                  (active === '' || active === 'home') && {
                    background: '',
                  }
                }>
                Live Scores
              </Button>
            </Link>
            <Link
              to="/schedule"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/schedule"
                onClick={() => {
                  setActive('schedule');
                }}
                sx={active === 'schedule' && { background: '' }}>
                Schedule
              </Button>
            </Link>
            <Link
              to="/archives"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/archives"
                onClick={() => {
                  setActive('archives');
                }}
                sx={active === 'archives' && { background: '' }}>
                Archives
              </Button>
            </Link>
            <Link
              to="/news"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                className={classes.button}
                onMouseOver={handleMouseOver}
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/news"
                onClick={() => {
                  setActive('news');
                }}
                sx={active === 'news' && { background: '' }}>
                News
              </Button>
            </Link>
            <Link
              to="/series"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/series"
                onClick={() => {
                  setActive('series');
                }}
                sx={
                  (active === 'series' || active.includes('selectxi')) && {
                    background: '',
                  }
                }>
                Series
              </Button>
            </Link>
            <Link
              to="/teams"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/teams"
                onClick={() => {
                  setActive('teams');
                }}
                sx={active === 'teams' && { background: '' }}>
                Teams
              </Button>
            </Link>
            <Link
              to="/videos"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/videos"
                onClick={() => {
                  setActive('videos');
                }}
                sx={
                  (active === 'videos' || active.includes('selectxi')) && {
                    background: '',
                  }
                }>
                Videos
              </Button>
            </Link>
            <Link
              to="/ranking"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/ranking"
                onClick={() => {
                  setActive('ranking');
                }}
                sx={
                  (active === 'rankings' || active.includes('selectxi')) && {
                    background: '',
                  }
                }>
                Rankings
              </Button>
            </Link>
            <Link
              to="/photos"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: '3px',
              }}>
              <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                component={Link}
                to="/photos"
                onClick={() => {
                  setActive('more');
                }}
                sx={
                  (active === 'more' || active.includes('selectxi')) && {
                    background: '',
                  }
                }>
                More
              </Button>
            </Link>
            <Link to="/crickbuzzplus" style={{ textDecoration: 'none' }}>
              <Button
                style={{
                  textTransform: 'none',
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  color: 'black',
                  height: '30px',
                  marginTop: '6px',
                }}
                color="inherit"
                component={Link}
                to="/crickbuzzplus"
                onClick={() => {
                  setActive('crickbuzzplus');
                }}
                sx={
                  (active === 'crickbuzzplus' ||
                    active.includes('selectxi')) && {
                    background: '',
                  }
                }>
                Crickbuzz Plus
              </Button>
            </Link>
            <Link to="/search" style={{ color: 'white' }}>
              <SearchIcon
                style={{
                  textTransform: 'none',
                  marginTop: '9px',
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              />
            </Link>
            <Link to="/login" style={{ color: 'white' }}>
              <AccountCircleIcon
                style={{
                  textTransform: 'none',
                  marginTop: '10px',
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              />
            </Link>
          </div>
          <div className={classes.menuIcon}>
            <MenuIcon
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            />
          </div>
        </Toolbar>
      </AppBar>
      {MobileMenu}
      {MobileMenus}
    </>
  );
};
