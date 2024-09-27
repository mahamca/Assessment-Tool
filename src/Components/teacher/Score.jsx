import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Score = () => {

  const [score,setScore]=useState([])
const params=useParams()
const {id} =params

  useEffect(()=>{
axios.get('http://127.0.0.1:4002/score/data')
.then(response=>setScore(response.data.filter(score=>score.uid===id)))
.catch(error=>console.log(error))


  },[])

  let data=score.length>0 ?  score.map((score,index)=>{
    return(
        
            <tr key={index}>
                <td>{index+1}</td>
                <td>{score.name}</td>
                <td>{score.email}</td>
                <td>{score.score}</td>
                
            </tr>
    
    )
  })  : <tr><th colSpan={4} style={{fontSize:"15px"}}><center>No data</center></th></tr>
  

  return (
    <div>

{/* {JSON.stringify(score)} */}

<table className='table table-hover'>
<thead style={{fontSize:"22px"}}>
    <tr>
        <th>Sl.no</th>
        <th>Name</th>
        <th>Email Id</th>
        <th>Score</th>
    </tr></thead>
    <tbody>
    {data}
    </tbody>
    
</table>



    </div>
  )
}

export default Score