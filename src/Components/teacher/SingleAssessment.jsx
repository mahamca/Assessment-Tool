import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const SingleAssessment = ({java,index,DeleteQuestion}) => {
    const navigate=useNavigate()
    const urlToCopy = `http://localhost:5173/questview/${java._id}`;
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(urlToCopy);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    };




  return (
    
  <tr>
    <td>{index+1}</td>
    <td>{java.name}</td>
    <td>{java.des}</td>
    <td>{java.time}</td>
    <td><input type='button' value="EDIT" className='btn btn-info' onClick={()=>navigate(`/questupdate/${java._id}`)}/></td>
    <td><input type='button' value="VIEW" className='btn btn-info' onClick={()=>navigate(`/questview/${java._id}`)}/></td>
    <td><input type='button' value="DELETE" className='btn btn-info' onClick={()=>DeleteQuestion(java._id)}/></td>
    
    <td><input type="button" value="Copy Link"  onClick={handleCopy} className='btn btn-success' /></td>
    <td><input type="button" value="SHARE"  onClick={()=>navigate('/sharemail/')} className='btn btn-success' /></td>
    <td><input type="button" value="RESPONSES"  onClick={()=>navigate(`/score/${java._id}`)} className='btn btn-success' /></td>

</tr>
  )
}

export default SingleAssessment