import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const QuestUpdate = () => {

    const navigate=useNavigate()

    const [name,setName] =useState('')
    const [desc,setDesc] =useState('')
    const [time,setTime] =useState(1)
    const [nameDetails,setNameDetails]=useState([])
    const [data,setData]=useState([])
   const params =useParams()
   const {id}=params

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4002/java/${id}`)
        .then(response=>{setNameDetails(response.data),
             setName(response.data[0].name),
             setDesc(response.data[0].des),
             setTime(response.data[0].time)
            setData(response.data[1])
        let quest_data=response.data[1]
        for(let quest of quest_data)
        {
            quest.new=false,
            quest.update=false,
            quest.delete=false,
            quest.existing=true
        }
        
        setData(quest_data)
         })
        .catch(error=>console.log(error))
       },[])


       const AddNewQuestions=(event)=>{
        event.preventDefault()
      
        setData([...data, {
          new:true,
          update:false,
          delete:false,
          existing:false,
          ansName:id,
          level:'',
          question:'',
          option1:'',
          option2:'',
          option3:'',
          ans:''

        }])
        
      }



       const UpdateFields =(event,index,field)=>{
        event.preventDefault()
        const question_duplicate=[...data]
        question_duplicate[index].update=true
        if(field==="question") question_duplicate[index].question = event.target.value
        else if(field==="level") question_duplicate[index].level =event.target.value
        else if(field==="option1") question_duplicate[index].option1 = event.target.value
        else if(field==="option2") question_duplicate[index].option2 = event.target.value
        else if(field==="option3") question_duplicate[index].option3 = event.target.value
        else if(field==='ans') question_duplicate[index].ans=event.target.value
        setData(question_duplicate);
    }

    const DeleteAddedProduct = (event, index) => {

        event.preventDefault()

        const added_products_duplicate = [...data]

        if (added_products_duplicate[index].existing === false) added_products_duplicate.splice(index, 1)
        else  added_products_duplicate[index].delete = true
        setData(added_products_duplicate)

    }


    const AddData = event => {
        event.preventDefault()
    
        const dataset = [
            {
                name:name,
                des:desc,
                time:time
            },
            data
        ]
    
        console.log(dataset, "dataset")
    
        // axios.patch(`http://127.0.0.1:4002/java/${id}/`, dataset)
        // .then(response=>navigate('/planlist/'))
        // .catch(error => console.log(error))

    axios.patch(`http://127.0.0.1:4002/java/${id}`,dataset)
    .then(response=>{
          navigate('/planlist/')
    })
    .catch(error=>console.log(error))

    
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
                <select className="form-select" value={inputs.level} onChange={event=>UpdateFields(event,index,"level")} aria-label="Default select example">
                <option  selected>Select the level</option>
                <option value="1">Beginer</option>
                 <option value="2">Intermediate</option>
                  <option value="3">Advanced</option>
                </select>
                 <TextField id="standard-basic" label="Question" variant="standard" value={inputs.question} onChange={event=>UpdateFields(event,index,"question")} />
                 <div className="input-group">
           <div className="input-group-text">
             <input className="form-check-input mt-0" type="radio"   name='option' onChange={event=>UpdateFields(event,index,"ans")}  value={inputs.option1} aria-label="Radio button for following text input"/>
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
         <div className="mb-3 order-box text-center">

<label htmlFor="exampleFormControlInput1" className="form-label">Remove</label>
<br />
    <button className='btn btn-danger' onClick={event => DeleteAddedProduct(event, index)}>X</button>

</div>
               </Box>
           </div>

        )
    }) : console.log("No data");


  return (
    <div>

<div className='container-fluid'>
     <button  className='btn btn-warning float-end' onClick={()=>navigate('/planlist/')}>Back</button>
     </div>
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
     
      <TextField id="standard-basic"  value={name} onChange={event=>setName(event.target.value)}  variant="standard"  />
      <TextField id="standard-basic"  value={desc}  onChange={event=>setDesc(event.target.value)} variant="standard"  />
      <TextField id="standard-basic"  value={time}  onChange={event=>setTime(event.target.value)} variant="standard"  />
      
    </Box>
    </div>
    <div className='order-add-button'>
                        <button className='btn btn-info float-end new-product' onClick={event => AddNewQuestions(event)}>+ Add New Questions</button>
                    </div>
{inputFields}

<div className="mb-3 text-center m-5">

<input type="submit" className="btn btn-primary" id="exampleFormControlInput1" onClick={event=>AddData(event)}/>

                    </div>
    </div>
  )
}

export default QuestUpdate