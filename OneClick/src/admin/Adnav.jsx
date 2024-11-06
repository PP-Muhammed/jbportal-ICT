import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Adnav = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#474140' }} id='cont'>
        <Toolbar >
            <Link to='/adhome'>
            <img src='./src/assets/logo.jpg' width='55' style={{marginRight:10}}/>
            </Link>
            <Typography variant='h6'>OneClick</Typography>
            {/* <Button >Logout</Button> */}
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br/>
    </div>
  )
}

export default Adnav