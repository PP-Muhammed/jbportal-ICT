import { Grid,Typography,Button , CardContent} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Manage = () => {
  return (
    <div>
        <h1>Manage Jobs</h1><br /><br /><br /><br /><br />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm:2,md:3}}>
        <Grid item xs={12} sm={6} md={4}> 
            <CardContent sx={{width: 300, height: 300}}>
                <Typography variant='h5'> Add </Typography>
                <Link to='/add'>
                <Button>Click</Button>
                </Link>
            </CardContent>
        </Grid>     
        <Grid item xs={12} sm={6} md={4}> 
            <CardContent sx={{width: 300, height: 300}}>
                <Typography variant='h5'> Delete / Update </Typography>
                <Link to='/update'>
                <Button>Click</Button>
                </Link>
            </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Manage
