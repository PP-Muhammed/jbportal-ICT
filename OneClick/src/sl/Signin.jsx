import { Box, Button, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
      setError('');
      alert('Login successful!');
      navigate('/home'); // Redirect to home page
      window.location.reload()
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Box display='flex' justifyContent='center' p={5}>
      <Paper sx={{ width: '400px', p: 4 }}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <Stack gap={2}>
            <Typography variant='h4'>Login</Typography>
            {error && <p style={styles.error}>{error}</p>}
            <div>
              <TextField
                type="text"
                id="username"
                name="username"
                variant='outlined'
                label='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </div>
            <div>
              <TextField
                type="password"
                id="password"
                name="password"
                variant='outlined'
                label='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>
            <Button type="submit" variant='contained'>Login</Button>
            <Box display='flex' gap={1} alignItems='center'>
              <Typography>Not a user?</Typography>
              <Link component={RouterLink} to='/signup'>Signup</Link>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

const styles = {
  form: { display: 'flex', flexDirection: 'column' },
  input: { width: '100%' },
  error: { color: '#e74c3c', marginBottom: '15px', fontSize: '14px' },
};

export default Signin;