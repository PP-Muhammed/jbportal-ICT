import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

const Add = () => {
  var locate= useLocation()
  var navigate = useNavigate()
  var [add,addnew]=useState({title:"",description:"",Experience_Required:"",salary:""})

  const inputhandler=(e)=>{
    addnew({...add,[e.target.name]:e.target.value})
    console.log(add)
  }

  const handlesubmit=()=>{
    console.log('clicked')
    if(locate.state!==null){
      axios.put("http://localhost:2003/update/" +locate.state.val._id,add)
      .then((res)=>{
        alert(res.data.message)
        navigate('/update')
      })
      .catch((err)=>{console.log(err)})
    }
    else{
      axios.post("http://localhost:2003/add",add)
    .then((res)=>{
      alert(res.data.message)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  }
  useEffect(() => {
    if (locate.state !== null) {
      addnew({
        ...add,
        title: locate.state.val.title,
        description: locate.state.val.description,
        Experience_Required: locate.state.val.Experience_Required,
        salary: locate.state.val.salary,

      });
    }
  }, []);
  return (
    <div >
        <h1>Add Jobs</h1><br /><br /><br />
      <TextField variant='outlined' label='Title' name='title' value={add.title} onChange={inputhandler}/><br /><br />
      <TextField variant='outlined' label='Description' name='description' value={add.description} onChange={inputhandler}/><br /><br />
      <TextField variant='outlined' label='Experience Required' name='Experience_Required' value={add.Experience_Required} onChange={inputhandler}/><br /><br />
      <TextField variant='outlined' label='Salary' name='salary' value={add.salary} onChange={inputhandler}/><br /><br />
      <Button variant='contained' onClick={handlesubmit} >ADD</Button>
</div>
  )
}

export default Add
