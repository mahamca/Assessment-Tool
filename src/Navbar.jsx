import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {

  const navigate=useNavigate()
  const dataset={
    refresh_token:localStorage.getItem("Refresh")
  }

  const Handler =(event)=>{

    axios.post('http://127.0.0.1:4002/user/logout/',dataset)
    .then(response=>{
      localStorage.clear()
      navigate('/')
    
    })
    .catch(error=>console.log(error))
        
     }

  
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"white"}}>ASSESSMENT TOOL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to={'/welcome/'}style={{color:"white"}} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/info/'} style={{color:"white"}}>Teacher</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/student/'} style={{color:"white"}}>Student</NavLink>
        </li>
        <li className="nav-item">
             
             <button className="btn btn-primary" onClick={event=>Handler(event)}>Logout</button>
             
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar