import React, { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import SingleAssessment from './SingleAssessment';

const PlanList = () => {

  const [assessData,setAssessData] = useState([])

 

useEffect(()=>{
  axios.get('http://127.0.0.1:4002/java/all/')
  .then(response=> setAssessData(response.data.filter(java=>java.userid===localStorage.getItem("Id"))))
  .catch(error=>console.log(error))
},[])


// console.log(localStorage.getItem("Id"));

// console.log(setAssessData(assessData.filter(java=>java.userid===localStorage.getItem("Id"))));

// console.log(localStorage.getItem("id"));
 

let data= assessData.length>0? assessData.map((java,index)=>
<SingleAssessment key={java._id} index={index} java={java} > </SingleAssessment>) : <tr><td>No data</td></tr>

  return (
    <div>


{/* {JSON.stringify(assessData)} */}

<table className='table table-hover'>
        <thead style={{fontSize:"22px"}}>
        <tr>
          <th >S.No</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
          <th></th>
          <th></th>
         </tr>
        </thead>

        <tbody>
           {data} 
        </tbody>

       </table>


        
    </div>
  )
}

export default PlanList