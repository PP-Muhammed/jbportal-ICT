import { Box, Button, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Typed from 'typed.js';

const WORDS = [
  'Job Seekers',
  'Applicants',
  'Students',
  'Aspirants',
  'Engineers',
  'Marketers',
  'Candidates',
];

const Lpage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed('.changing', {
      strings: WORDS,
      typeSpeed: 30,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const handleSigninClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSigninAsAdmin = () => {
    setOpenDialog(false);
    navigate('/adsignin');  // Adjust this route if necessary
  };

  const handleSigninAsUser = () => {
    setOpenDialog(false);
    navigate('/signin');  // Adjust this route if necessary
  };

  return (
    <Stack gap={4} sx={{ p: 10, height: '100vh' }} justifyContent="center">
      <Typography variant="h3">
        Welcome <span className="changing"></span>
      </Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={handleSigninClick}>Signin</Button>
        <Link to="/signup">
          <Button variant="contained">Signup</Button>
        </Link>
      </Box>

      {/* Dialog for selecting Admin or User signin */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Choose Sign-in Type</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Please select whether you'd like to sign in as an Admin or a User.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSigninAsAdmin} color="primary">Admin</Button>
          <Button onClick={handleSigninAsUser} color="primary">User</Button>
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Lpage;
