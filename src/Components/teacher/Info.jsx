import React, { useEffect ,response, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Shareform from './Shareform'



const Info = () => {
  const navigate=useNavigate()
  const [level,setLevel] =useState('')
  const [no,setNo] =useState('')
  const[ans,setAns] = useState([])
  
  const submitHandler = (event) =>{
    event.preventDefault()
    
    const dataset ={
       level:level,
       num:no
    }
    axios.post('http://127.0.0.1:4002/java/base/',dataset)
    .then(response=>console.log(response.data)
    )
    .catch(error=>console.log(error))
}


  


  return (
    <div>
<div>

  
  <button className='btn btn-success float-end' onClick={()=>navigate('/createform/')}>Create NEW FORM</button>
</div>
<br /><br />
      <form >
      {/* <label htmlFor="">Select the class</label>
<select class="form-select" aria-label="Default select example">
  <option selected>--select--</option>
  <option value="1">I</option>
  <option value="2">II</option>
  </select><br />
<label htmlFor="">Select the subject</label>
<select class="form-select" aria-label="Default select example">
  <option selected>--select--</option>
  <option value="english">English</option>
  <option value="maths">maths</option>
  </select><br /> */}

  <label htmlFor="">Select the level</label>
  <select class="form-select" aria-label="Default select example" value={level} onChange={event=>setLevel(event.target.value)}>
  <option value="1" selected>Beginner Level</option>
  <option value="2">Intermediate Level</option>
  <option value="3">Advanced Level</option>
  </select><br />
  <label htmlFor="">Enter the number of questions</label>
  <input type="number"  value={no} onChange={event=>setNo(event.target.value)}/><br /><br />
  {/* <label htmlFor="">Do you want to shuffle the questions </label>
  <input type="button"  value="Yes"/>&nbsp;
<input type="button"  value="No"/><br /><br /> */}
<input type="submit" onClick={(event)=>submitHandler(event)} />
      </form>

      {JSON.stringify(ans)}



    </div>
  )
}

export default Info