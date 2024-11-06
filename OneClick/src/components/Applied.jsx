import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Stack, Button } from '@mui/material';
import axios from 'axios';

const Applied = () => {
  const [applications, setApplications] = useState([]); // State to hold applications
  const [error, setError] = useState(''); // State for error handling

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:2004/view'); // Replace with your API endpoint
        setApplications(response.data); // Set applications state
      } catch (err) {
        setError('Failed to load applications. Please try again.'); // Handle errors
        console.error(err);
      }
    };

    fetchApplications(); // Call fetch function
  }, []); // Empty dependency array to run once on mount

  const handledel = async (id) => { // Change parameter to id
    try {
      const res = await axios.delete('http://localhost:2004/delete/' + id);
      alert(res.data.message);
      window.location.reload(); // Reload to reflect changes
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Applied Applications
      </Typography>
      {error && <Typography color="error">{error}</Typography>} {/* Display error message */}
      <Stack spacing={2} gap={2}>
        {applications.map((application, index) => (
          <Paper key={index} sx={{ p: 2 }}>
            <Typography variant="h6">{application.jobtitle}</Typography>
            <Typography>Full Name: {application.fullName}</Typography>
            <Typography>Contact No: {application.contactNo}</Typography>
            <Typography>Email: {application.email}</Typography>
            <Box display='flex' flexWrap='wrap'>
              <Button variant='contained' onClick={() => { handledel(application._id) }}>Delete</Button> {/* Pass the correct id */}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Applied;