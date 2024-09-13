import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'

import Popup from '../Popup'

const Login = ({setLogin,setSide}) => {

    const [uname,setUname] = useState('')
    const [pwd,setpwd] = useState('')
    const [showModel,setShowModel] = useState(false)
    const [msg,setMsg]=useState('')
   
    const closeModel=()=>{
      setShowModel(false)
          
    }
 const navigate=useNavigate()
 
setLogin(false)
setSide(false)
useEffect(()=>{
  return(()=>{
    setLogin(true)
    setSide(true)
  })
},[])



const Submit = event =>{

    event.preventDefault()
    const dataset={
      username:uname,
      password:pwd
    }

    axios.post('http://127.0.0.1:4002/user/validate/' , dataset)
    .then(response=>{setMsg(response.data.message)
    if(response.data.status===true){
  
    
      localStorage.setItem("Bearer",response.data.access_token)
      localStorage.setItem("Refresh",response.data.refresh_token)
  
      navigate('/welcome/')
    }
    else
   {
    setShowModel(true)
    }})
    .catch(error=>console.log(error))
}

useEffect(()=>{
  const GetToken=async()=>{
    const dataset={
      refresh_token:localStorage.getItem("Refresh")
          }
          console.log(dataset);
          axios.post('http://127.0.0.1:4002/user/token/',dataset)
          .then(response=>{ console.log("Logging");
            localStorage.setItem('Bearer',response.data.access_token)
          

          })
  }
  GetToken()
  setInterval(GetToken,30000)
},[])

  return (
    <div>
      {/* {JSON.stringify(reg_data)} */}


<div className='logcontain'>
      
      <img src="/src/images/img4.png" className="d-inline w-20" alt="..." style={{width:"50%"}}/>

      <Popup show={showModel} handleClose={closeModel}>
    <p className='text-danger'>{msg} </p>
  </Popup>

<form className='login-form'>
    <div className='form-group'>
    <label htmlFor="" >User Name</label>
    <input type="text" value={uname} onChange={event=>setUname(event.target.value)}/><br /><br /></div>
   <div className='form-group'> <label htmlFor="">Password</label>
    <input type="password"  value={pwd} onChange={event=>setpwd(event.target.value)} /><br /></div>
   <button className='login-button' onClick={event=>Submit(event)}>Login</button>

</form>

      </div>
</div>
      
 )}

export default Login