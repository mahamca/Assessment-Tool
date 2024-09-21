import React, { useState } from 'react'
import axios from 'axios'

const ShareMail = () => {

   const [to,setTo] =useState('')
   const [subject,setSubject] =useState('')
   const [text,setText] =useState('')
   const [html,setHtml] =useState('')

   const submitHandler=(event)=>{
    event.preventDefault()
    const dataset={
      
      to:to,
        subject:subject,
        text:text,
        html:html,
         }
      
  
    axios.post('http://127.0.0.1:4002/sendmail/send/',dataset)
    .then(console.log("send mail")
    )
    .catch(error=>console.log("error"))
  }



  return (
    <div>
      <form className='form-group'>
        <label htmlFor="" >To</label>
        <input type="text" value={to} onChange={event=>setTo(event.target.value)}/><br />
        <label htmlFor="">Subject</label>
        <input type="text" value={subject} onChange={event=>setSubject(event.target.value)} /><br />
        <label htmlFor="">Text</label>
        <input type="text" value={text} onChange={event=>setText(event.target.value)} /><br />
        <label htmlFor="">Html</label>
        <input type="text" value={html} onChange={event=>setHtml(event.target.value)} /><br /><br />
        <input type="button" value="Share" onClick={event=>submitHandler(event)} />
        
        
      </form>




      
    </div>
  )
}

export default ShareMail