import React, { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import SingleAssessment from './SingleAssessment';
import Popupmodel from '../Popupmodel';

const PlanList = () => {

  const [assessData,setAssessData] = useState([])
  const [showModel,setShowModel] = useState(false)
  const [confirm_delete,setconfirm] = useState(false) 
  const [id,setId] =useState(0)

 
  const closeModel=()=>{
    setShowModel(false)
  }
  
  
  const DeleteQuestion = id =>{
    setShowModel(true)
    setId(id)
  }


  useEffect(()=>{
    if(confirm_delete === true){


    axios.delete(`http://127.0.0.1:4002/java/${id}`)
    .then(response=>{
        setAssessData(assessData.filter(java=>java._id !==id))

    })
    .catch(error=>console.log(error))
    setconfirm(false)
}
},[confirm_delete])




useEffect(()=>{
  axios.get('http://127.0.0.1:4002/java/all/')
  .then(response=> setAssessData(response.data.filter(java=>java.userid===localStorage.getItem("Id"))))
  .catch(error=>console.log(error))
},[])




// console.log(setAssessData(assessData.filter(java=>java.userid===localStorage.getItem("Id"))));


 

let data= assessData.length>0? assessData.map((java,index)=>
<SingleAssessment key={java._id} index={index} java={java} DeleteQuestion={DeleteQuestion} > </SingleAssessment>) : <tr><th colSpan={10} style={{fontSize:"15px"}}><center>No data</center></th></tr>

  return (
    <div className='container1'>

<Popupmodel show={showModel} handleClose={closeModel} setConfirm={setconfirm}>
    <p className='text-danger'>Are you sure want to delete?</p>
  </Popupmodel>
{/* {JSON.stringify(assessData)} */}

<table className='table table-hover'>
        <thead style={{fontSize:"22px"}}>
        <tr>
          <th >S.No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Duration</th>
          <th colSpan={6}></th>
          
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