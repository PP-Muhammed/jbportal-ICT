import React, { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const {logout} = useAuth();
  
  const open = Boolean(anchorEl);
  const openNav = Boolean(anchorElNav);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuNav = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorElNav(null);
  };

  const handleProfileClick = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUserDetails(userData);
    setOpenProfileDialog(true); // Open profile dialog
    handleClose(); // Close account menu
  };

  const handleCloseProfileDialog = () => {
    setOpenProfileDialog(false);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#474140' }} id='cont'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='error'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleMenuNav}
          >
            <MenuIcon />
          </IconButton>
          <img src='./src/assets/logo.jpg' width='55' alt="Logo" />
          <div style={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{
                position: 'absolute',
                top: 8,
                right: 16,
              }}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={()=>logout()}>Log Out</MenuItem>
            </Menu>
            <Menu
              id="basic-menu"
              anchorEl={anchorElNav}
              open={openNav}
              onClose={handleCloseNav}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to='/home'><Button><MenuItem onClick={handleCloseNav}>Browse Jobs</MenuItem></Button></Link><br />
              <Link to='/appld'><Button><MenuItem onClick={handleCloseNav}>Applied Jobs</MenuItem></Button></Link><br />
            </Menu>
          </div>
        </Toolbar>
      </AppBar><br /><br />

      {/* Profile Dialog */}
      <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          {userDetails ? (
            <div>
              <Typography variant="body1">Email: {userDetails.email}</Typography>
              <Typography variant="body1">Full Name: {userDetails.fullName}</Typography>
              <Typography variant="body1">Contact No: {userDetails.contactNo}</Typography>
              <Typography variant="body1">Alt No: {userDetails.altNo}</Typography>
              <Typography variant="body1">Degree: {userDetails.degree}</Typography>
              <Typography variant="body1">Graduation Year: {userDetails.gradYear}</Typography>
              <Typography variant="body1">Diploma: {userDetails.diploma}</Typography>
              <Typography variant="body1">Graduation (Diploma): {userDetails.diplomaGrad}</Typography>
              <Typography variant="body1">Programming Languages: {userDetails.programmingLanguages}</Typography>
              <Typography variant="body1">Experience: {userDetails.experience}</Typography>
            </div>
          ) : (
            <Typography variant="body1">No user details available.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Navbar;
