import React ,{useEffect} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


const Intro = ({setLogin , setSide}) => {
const navigate=useNavigate()

setLogin(false)


    useEffect(()=>{
       return ()=>{
        setLogin(true)
       }
    },[])


    setSide(false)
useEffect(()=>{
  return(()=>{
    setSide(true)
  })
},[])
  return (
    <div>

<header className="header">
        <h1 style={{display:"inline"}}>QUIZ PARK</h1>
        <nav style={{display:"inline" , color:"white", textAlign:"end"}}>
       
          <button className="btn btn-primary float-end" style={{marginRight:"20px"}} onClick={()=>navigate('/')}  >CONTACT US</button>
      <button className="btn btn-primary float-end"style={{marginRight:"20px"}}onClick={()=>navigate('/login/')}>LOGIN</button>
      <button className="btn btn-primary float-end"style={{marginRight:"20px"}}onClick={()=>navigate('/register/')}>REGISTER</button>
      
        </nav>
      </header>
   <br /><br />
    

<br />
  
   {/* <button className="btn btn-outline-success float-end" onClick={()=>navigate('/login/')}  >SIGN IN</button>
<button className="btn btn-outline-primary float-end" onClick={()=>navigate('/register/')}>SIGN UP</button> */}
<h2 style={{color:"green", fontFamily:"fantasy", fontSize:"20px"}}>Sharpen the saw! <br />
Access your skills NOW!!</h2>
   <br />


   

   <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="src/images/img3.jfif" className="d-block w-20" alt="..." style={{width:"100%"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="src/images/img6.png" className="d-block w-20" alt="..." style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src="src/images/img5.jpg" className="d-block w-20" alt="..." style={{width:"100%"}}/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div><br />
<div className='para-design'>
  <p >
  Online assessment typically includes tests, quizzes and questionnaires that teachers can administer to students so they can examine their progress in different learning areas. For example, they can include skill assessments, communication tests and behavioral evaluations. Online assessment platforms allow teachers to create tests based on curriculum content or learning development needs. They also allow teachers to track student data for future reports, allowing them to create more targeted educational practices.
  </p>

</div>


<Row gutter={16}>
    <Col span={8}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="src/images/img5.jpeg" />}
  >
    <Meta title="" description="" />
  </Card>
    </Col>
    <Col span={8}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" style={{height:"120px"}} src="src/images/img6.png" />}
  >
    <Meta title="" description="" />
  </Card>
    </Col>
    <Col span={8}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" style={{height:"120px"}} src="src/images/img7.jpg" />}
  >
    <Meta title="" description="" />
  </Card>
    </Col>
  </Row>
<br />
<div className='footer'>
<h3> Quick Links</h3>
 HOME <br />
 CONTACT US <br />
 LOGIN <br />
 contact us <br />
 phone no <br />
 email

</div>

    </div>
  )
}

export default Intro