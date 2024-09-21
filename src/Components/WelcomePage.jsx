import React, { useState } from 'react'

const WelcomePage = () => {

  return (
    <div>
      
      <p style={{textAlign:"right"}}> Welcome {localStorage.getItem("Name")}</p>
      <h1> Welcome to QUIZ PARK!</h1>
    
    <h2>Here you can know how to use this app</h2>
    </div>
  )
}

export default WelcomePage