// import Register from "./Components/user/Register";
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import React from 'react'
// import Navbar from "./Navbar";
// import Intro from "./Components/Intro";
// import Login from "./Components/user/Login";
// import WelcomePage from "./Components/WelcomePage";
// import PlanList from "./Components/teacher/PlanList";
// import SideNavBar from "./SideNavBar"; 

// const App = () => {
//   return (
//     <div>
//     <Navbar></Navbar>
//     <SideNavBar></SideNavBar>

// <Routes>
//     <Route path="/register/" element={<Register/>}/>
//     <Route path="/" element={<Intro/>}/>
//     <Route path='/login/' element={<Login/>}/>
//     <Route path='/welcome/' element={<WelcomePage/>}/>
//     <Route path='/planlist/' element={<PlanList/>}/>
    
    
    
// </Routes>

       
       

//     </div>
//   )
// }

// export default App



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MailOutlined } from '@ant-design/icons';
import PlanList from "./Components/teacher/PlanList";
import Navbar from "./Navbar";
import Register from "./Components/user/Register";
import Info from "./Components/teacher/Info";
import Intro from './Components/Intro';
import Login from './Components/user/Login';
import WelcomePage from './Components/WelcomePage';
import CreateForm from './Components/teacher/CreateForm';
import { store } from './Components/react-redux/store';
import { Provider } from 'react-redux';
import Sidebar from './Sidebar';
import JavaQuest from './Components/teacher/JavaQuest';
import QuestView from './Components/teacher/QuestView';
import Shareform from './Components/teacher/Shareform';
import Thank from './Components/teacher/Thank';
import Timer from './Components/Timer';
import ShareMail from './Components/ShareMail';





const { Sider, Content } = Layout;

const App = () => {
  const location = useLocation();
  const [login,setLogin] = useState(false)
  const [side,setSide] =useState(false)


  return (
    <Provider store={store}>
    <div>
      {
        login && <Navbar></Navbar> 
      }
     <Layout style={{ minHeight: '100vh' }}>
      {
        side && <Sidebar></Sidebar>
        }
     
       
        <Layout style={{ padding: '0 24px', minHeight: '100vh' }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Routes>
              <Route path="/" element={<Intro setLogin={setLogin} setSide={setSide}/>} />
              <Route path="/login" element={<Login setLogin={setLogin} setSide={setSide}/>} />
              <Route path="/planlist" element={<PlanList />} />
              <Route path="/register/" element={<Register setLogin={setLogin} setSide={setSide}/>}/>
              <Route path="/info/" element={<Info/>}/>
              <Route path="/welcome/" element={<WelcomePage/>}/>
              <Route path='/createform/' element={<CreateForm/>}/>
              <Route path='/questlist/' element={<JavaQuest/>}/>
              <Route path='/questview/:id/' element={<QuestView initialMinutes={1}/>}/>
              <Route path='/shareform/' element={<Shareform/>}/>
              <Route path='/thank/' element={<Thank/>}/>
              <Route path='/timer/' element={<Timer initialMinutes={10}/>}/>
              <Route path="/mail/" element={<ShareMail/>}/>
              
              
              {/* <Route path='/sidebar/' element={<Sidebar/>}/> */}
    
            </Routes>
          </Content>
        </Layout>
        </Layout>
       
      
      </div>
      </Provider>
  );
}

export default App;