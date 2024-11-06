import { Button, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const Adhome = () => {
  return (
    <div><br /><br /><br />
        <Typography variant='h3'>
            WELCOME
        </Typography><br /><br /><br /><br /><br />
      <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm:2,md:3}}>
        <Grid2 item xs={12} sm={6} md={4}> 
            <CardContent sx={{width: 300, height: 300}}>
                <Typography variant='h5'> MANAGE </Typography>
                <Link to='/manage'>
                <Button>Click</Button>
                </Link>
            </CardContent>
        </Grid2>     
        <Grid2 item xs={12} sm={6} md={4}> 
            <CardContent sx={{width: 300, height: 300}}>
                <Typography variant='h5'> USER DETAILS </Typography>
                <Link to='/user'>
                <Button>Click</Button>
                </Link>
            </CardContent>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default Adhome
