import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const pages = ['Home', 'Halls', 'Contact Us', 'About Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for large screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.kiKWJL8djHmFirst70cIUwHaHN&pid=Api&P=0&h=180"
              alt="Sri Krishna Institutions"
              style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
            />
          </Box>

          {/* Logo for small screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.kiKWJL8djHmFirst70cIUwHaHN&pid=Api&P=0&h=180"
              alt="Sri Krishna Institutions"
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
          </Box>

          {/* Webpage Name */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontWeight: 700, color: '#fff' }}
          >
            Sri Krishna Institutions
          </Typography>

          {/* Navbar Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === 'About Us' ? (
                    <ScrollLink to="about" smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{page}</Typography>
                    </ScrollLink>
                  ) : page === 'Contact Us' ? (
                    <ScrollLink to="contact" smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{page}</Typography>
                    </ScrollLink>
                  ) : (
                    <a href={`/${page.toLowerCase().replace(' ', '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{page}</Typography>
                    </a>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page === 'About Us' ? (
                <ScrollLink 
                  key={page}
                  to="about"
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}
                  >
                    {page}
                  </Button>
                </ScrollLink>
              ) : page === 'Contact Us' ? (
                <ScrollLink 
                  key={page}
                  to="contact"
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}
                  >
                    {page}
                  </Button>
                </ScrollLink>
              ) : (
                <Button
                  key={page}
                  component="a"
                  href={`/${page.toLowerCase().replace(' ', '')}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#fff', display: 'block' }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>

          {/* Login Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleLoginClick} className="login-button">
              Login/SignUp
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
