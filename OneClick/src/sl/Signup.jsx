import { Box, Button, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    contactNo: '',
    altNo: '',
    degree: '',
    gradYear: '',
    diploma: '',
    diplomaGrad: '',
    programmingLanguages: '',
    experience: '',
    username: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Signup successful! Redirecting to Signin...');
    navigate('/signin'); // Redirect to signin page
  };

  return (
    <Box p={4}>
      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSignup}>
          <Stack gap={2} sx={{ maxWidth: '700px' }}>
            <Typography variant='h4' sx={{ mb: 1 }}>Signup</Typography>
            <Typography variant='h6'>User Details</Typography>
            <Box display='flex' gap={2} flexWrap='wrap'>
              <TextField name="email" value={formData.email} onChange={handleChange} label='Email' type='email' sx={{ flex: 1 }} required />
              <TextField name="fullName" value={formData.fullName} onChange={handleChange} label='Full Name' type='text' sx={{ flex: 1 }} required />
            </Box>
            <Box display='flex' gap={2} flexWrap='wrap'>
              <TextField name="contactNo" value={formData.contactNo} onChange={handleChange} label='Contact no' type='number' sx={{ flex: 1 }}  required/>
              <TextField name="altNo" value={formData.altNo} onChange={handleChange} label='Alt No' sx={{ flex: 1 }}  />
            </Box>
            <Typography variant='h6'>Qualifications</Typography>
            <Box display='flex' gap={2} flexWrap='wrap'>
              <TextField name="degree" value={formData.degree} required onChange={handleChange} label='Degree' placeholder='BTech, BCom' sx={{ flex: 1 }} />
              <TextField name="gradYear" value={formData.gradYear} required onChange={handleChange} label='Graduation Year' sx={{ flex: 1 }} />
            </Box>
            <Box display='flex' gap={2} flexWrap='wrap'>
              <TextField name="diploma" value={formData.diploma} required onChange={handleChange} label='Diploma' sx={{ flex: 1 }} />
              <TextField name="diplomaGrad" value={formData.diplomaGrad} required onChange={handleChange} label='Graduation (Diploma)' sx={{ flex: 1 }} />
            </Box>
            <Typography variant='h6'>Skills</Typography>
            <TextField name="programmingLanguages" value={formData.programmingLanguages} onChange={handleChange} label='Programming Languages' fullWidth />
            <Typography variant='h6'>Experience</Typography>
            <TextField name="experience" value={formData.experience} onChange={handleChange} label='Year of experience , Company , ....' fullWidth />
            <Typography variant='h6'>Login Credentials</Typography>
            <Box display='flex' gap={2} flexWrap='wrap'>
              <TextField name="username" value={formData.username} required onChange={handleChange} label='Username' sx={{ flex: 1 }} />
              <TextField name="password" value={formData.password} required onChange={handleChange} label='Password' type='password' sx={{ flex: 1 }} />
            </Box>
            <Box>
              <Button type="submit" variant='contained'>SignUp</Button>
            </Box>
            <Box display='flex' gap={1} alignItems='center'>
              <Typography>Already a user?</Typography>
              <Link component={RouterLink} to='/signin'>Signin</Link>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
