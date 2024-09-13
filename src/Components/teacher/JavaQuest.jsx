import React, { useEffect, useState } from 'react'
import axios from 'axios'

const JavaQuest = () => {

     const [javadata,setJavaData] =useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:4002/java/all/')
        .then(response=>setJavaData(response.data))
        .catch(error=>console.log(error)
        )
    },[])


let list=javadata.length>0?  javadata.map((question,index)=>{
return(
    <tr key={question._id}>
        <td>{index+1}</td>
        <td>{question.question}</td>
        <td>{question.option1}</td>
        <td>{question.option2}</td>
        <td>{question.option3}</td>
    </tr>
)
}) : console.log("NO DATA");


  return (

   <div>JavaQuest
<table>
    <thead>
    <tr>
        <td>sl no</td>
        <td>question</td>
        <td>option1</td>
        <td>option2</td>
        <td>option3</td>
    </tr>
     </thead>
<tbody>
{list}
</tbody>
     
</table>

{/* {JSON.stringify(javadata)} */}
    </div>
  )
}

export default JavaQuest