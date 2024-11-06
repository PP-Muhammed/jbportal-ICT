import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const JobApplicationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize navigate
  const { jobtitle } = location.state || {};  // Extract jobtitle from state

  // State to hold form input values
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');  // State for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    // Combine job title and applicant details
    const application = {
      jobtitle,
      fullName,
      contactNo,
      email,
    };

    try {
      // Send POST request to the API
      await axios.post('http://localhost:2004/add', application);
      // Navigate to the applied section after successful submission
      // navigate('/applied');
      window.location.reload();
    } catch (err) {
      // Handle error (display a message or log it)
      setError('An error occurred while submitting your application. Please try again.');
      console.error(err);  // Log error for debugging
    }
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>  {/* Bind handleSubmit to the form */}
        <Stack gap={1} sx={{ maxWidth: '500px' }}>
          <Typography variant="h5" component="h2" flexWrap='wrap'>
            Apply for {jobtitle ? jobtitle : 'Job'}  {/* Fallback to "Job" if jobtitle is undefined */}
          </Typography>
          {error && <Typography color="error">{error}</Typography>} {/* Display error message */}
          <Box display='flex' gap={2} flexWrap='wrap'>
            <TextField 
              variant='standard' 
              label='Full Name' 
              required 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)}  // Update state
            />
            <TextField 
              variant='standard' 
              label='Contact No:' 
              required 
              value={contactNo} 
              onChange={(e) => setContactNo(e.target.value)}  // Update state
            />
            <TextField 
              variant='standard' 
              label='Email' 
              type='email' 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}  // Update state
            />
          </Box>
          <Box display='flex'>
            <Button variant='contained' type='submit'>Submit</Button>  {/* Change to type 'submit' */}
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default JobApplicationForm;
