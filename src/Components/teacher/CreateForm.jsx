import React, { useState , useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {

    const[ data,setData] =useState([])
    const [name,setName] =useState('')
    const [desc,setDesc] = useState('')
    const [time,setTime] =useState('')
  
    
    const navigate=useNavigate()

    
    const submit=()=>{
               
        setData([...data,{
            level:"",
            question:"",
            option1:"",
            option2:"",
            option3:"",
            ans:""
        }])
    }

    

const submitHandler=(event)=>{
  event.preventDefault()
  console.log();
  
  const dataset=[{
    userid:localStorage.getItem('Id'),
    name:name,
    des:desc,
    time:time
       }, 
    data
]
  axios.post('http://127.0.0.1:4002/java/add/',dataset)
  .then(navigate('/planlist/'))
  .catch(error=>console.log("error"))
}

    const UpdateFields =(event,index,field)=>{
        const new_data =[...data]
        if(field==="question") new_data[index].question = event.target.value
        else if(field==="level") new_data[index].level =event.target.value
        else if(field==="option1") new_data[index].option1 = event.target.value
        else if(field==="option2") new_data[index].option2 = event.target.value
        else if(field==="option3") new_data[index].option3 = event.target.value
        else if(field==='ans') new_data[index].ans=event.target.value
        setData(new_data);
    }

       
   let inputFields = data.length>0 ? data.map((inputs,index)=>{
        return(
            <div key={index} style={{border: '1px solid white', 
                borderRadius:"20px", padding: '10px',        
                 margin: '10px', backgroundColor:"white",borderShadow:"0 4px 8px rgba(8, 4, 228, 0.1)"
             }}>
           <Box
               component="form"
               sx={{
                 '& > :not(style)': { m: 1, width: '120ch' },
               }}
               noValidate
               autoComplete="off"
             >
              <br /><br />
                <select class="form-select" value={inputs.level} onChange={event=>UpdateFields(event,index,"level")} aria-label="Default select example">
                <option selected>Select the level</option>
                <option value="1">Beginer</option>
                 <option value="2">Intermediate</option>
                  <option value="3">Advanced</option>
                </select>
                 <TextField id="standard-basic" label="Question" variant="standard" value={inputs.question} onChange={event=>UpdateFields(event,index,"question")} />
                 <div className="input-group">
           <div className="input-group-text">
             <input className="form-check-input mt-0" type="radio"  name='option' onChange={event=>UpdateFields(event,index,"ans")}  value={inputs.option1} aria-label="Radio button for following text input"/>
           </div>
           <input style={{width:"250px"}} type="text" value={inputs.option1} onChange={event=>UpdateFields(event,index,"option1")} placeholder='Option 1'   aria-label="Text input with radio button"/>
         </div>
         <div className="input-group">
         <div className="input-group-text">
             <input className="form-check-input mt-0" name="option" type="radio" onChange={event=>UpdateFields(event,index,"ans")} value={inputs.option2} aria-label="Radio button for following text input"/>
           </div>
           <input style={{width:"250px"}} type="text" value={inputs.option2} placeholder='Option 2' onChange={event=>UpdateFields(event,index,"option2")} aria-label="Text input with radio button"/>
         </div>
         <div className="input-group">
         <div className="input-group-text">
             <input className="form-check-input mt-0" name="option" type="radio" onChange={event=>UpdateFields(event,index,"ans")}  value={inputs.option3} aria-label="Radio button for following text input"/>
           </div>
           <input style={{width:"250px"}} type="text" value={inputs.option3} placeholder='Option 3' onChange={event=>UpdateFields(event,index,"option3")}  aria-label="Text input with radio button"/>
         </div>
         
               </Box>
           </div>

        )
    }) : console.log("No data");


  return (
    <div ><h1>Assessment</h1>  

    <input type="checkbox" value="Beginner"  />
    <input type="checkbox" value="Intermediate" />
    <input type="checkbox" value="Advanced" />

<div  style={{border: '1px solid white', 
       borderRadius:"20px", padding: '10px',        
        margin: '10px', backgroundColor:"white",borderShadow:"0 4px 8px rgba(8, 4, 228, 0.1)"
    }}>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '120ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" label="Title" value={name} variant="standard" onChange={event=>setName(event.target.value)} />
      <TextField id="standard-basic" label="Description" value={desc} variant="standard" onChange={event=>setDesc(event.target.value)} />
      <TextField id="standard-basic" label="set the time (Minutes)" value={time} variant="standard" onChange={event=>setTime(event.target.value)} />
      
    
    </Box>
    </div>
  <div style={{border: '1px solid white', // Set the border width, style, and color
       borderRadius:"20px", padding: '10px',         // Optional: Add padding inside the border
        margin: '10px', backgroundColor:"white",borderShadow:"0 4px 8px rgba(8, 4, 228, 0.1)"
    }}>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '120ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
       


<div>
<input type="button" className='btn btn-info float-start' onClick={submit}  value={"+Add Questions"}/>

{inputFields}
</div>


<div className="mb-3 text-center m-5">

      <input type="submit" value="submit" onClick={event=>submitHandler(event)} className="btn btn-primary" id="exampleFormControlInput1" />

                    </div>
      </Box>
  </div>
   



    </div>
  )
}

export default CreateForm