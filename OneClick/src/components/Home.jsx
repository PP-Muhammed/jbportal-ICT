import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Box, Chip, Grid2, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TEXT_LIMIT = 300

const Home = () => {
  var [listing, setListing] = useState([])
  var navigate = useNavigate()
  useEffect(() => {
    const ac = new AbortController()
    axios.get('http://localhost:2003/view', {
      signal: ac.signal
    })
      .then((pro) => {
        setListing(pro.data)
      })
    return () => {
      ac.abort()
    }
  }, [])

  const handleapply = ((job) =>{
    navigate('/apply', {state: {jobtitle:job.title}});
  })
   return ( 
    <Box p={4} >
      <Grid2 container rowSpacing={2} columnSpacing={2}>
        {listing.map((val) => {
          return (
            <Grid2 key={val._id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Stack gap={1}>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', }}>
                      {val.description.slice(0, TEXT_LIMIT) + (val.description.length > TEXT_LIMIT ? '...' : '')}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Box display='flex' flex={1} gap={1}>
                    <Chip label={val.Experience_Required} size='small' color='secondary' />
                    <Chip label={val.salary} size='small' color='primary' />
                  </Box>
                  <Box>
                    <Button size="small" color="primary" onClick={()=>{handleapply(val)}}>
                      Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid2>
          )
        })}
      </Grid2>
    </Box>
  )
}

export default Home