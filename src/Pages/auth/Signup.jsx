import { Button, Grid, Input, background } from '@chakra-ui/react'
import React, { useState } from 'react'
import Welcome from '../Welcome'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postSignup } from '../../Redux/auth/authAction'

function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()

    
    const handleEmail=(e)=>{
        let value=e.target.value 
        setEmail(value)
    }
    const handlePassword=(e)=>{
        let value=e.target.value 
        setPassword(value)
    }
    const handleClick=()=>{
        let data={
            email:email,
            password:password
        }
        dispatch(postSignup(data))
        navigate('/home')
    }



  return (
    <div >
        

<Grid >

<Input onChange={handleEmail} bgColor={"grey"} width={"300px"} placeholder='E-MAIL'/>
<Input onChange={handlePassword} bgColor={"grey"} width={"300px"} placeholder='PASSWORD'/>
<Button onClick={handleClick} width={"300px"} color={"black"}>LOGIN</Button>
<h6>Have you forgotten your password?</h6>


</Grid>
    
    
    </div>
   
  )
}

export default Signup