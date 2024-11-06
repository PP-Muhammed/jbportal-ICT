import { Button, Card, CardActions, CardContent, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    var navigate= useNavigate()
    var[a,b]=useState([])
    axios.get('http://localhost:2003/view') 
    .then((pro)=>{
      console.log(pro.data)
      b(pro.data)
    })

    const handledelete=(id)=>{
        axios.delete('http://localhost:2003/delete/'+id)
        .then((res)=>{
            alert(res.data.message)
            window.location.reload()
        })
    }

    const handleupdate=(val)=>{
        navigate('/add',{state:{val}})
    }
  return (
    <div><br /><br />
      <Grid2 container rowSpacing={2} columnSpacing={{xs:1,sm:2,md:3}}>
        {a.map((val)=>{
            return(
                <Grid2 item xs={12} sm={6} md={4}>
                    <Card sx={{maxWidth:350}}>
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                {val.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {val.description}
          </Typography>
          <Typography  variant='h6' sx={{color: 'text.secondary'}}>
            {val.Experience_Required}
          </Typography>
          <Typography  variant='h6' sx={{color: 'text.secondary'}}>
            {val.salary}
          </Typography>
          </CardContent>
          <CardActions>
        <Button variant='outlined' onClick={()=>{handledelete(val._id)}}>Delete</Button>
        <Button variant='outlined' onClick={()=>{handleupdate(val)}}>Update</Button>
        </CardActions>
                    </Card>
                    </Grid2>
                    )
        })}
      </Grid2>
    </div>
  )
}

export default Update
