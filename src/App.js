import React from 'react';

// pages

import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Home from './pages/home/home';
import Pagenotfound from './pages/dashboard/Pagenotfound';

// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyToast from './components/tostify/tostify';
import Master from './pages/dashboard/master';
import StudentPage from './pages/dashboard/student';

function App() {
  const role = localStorage.getItem("role")
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} /> 
      <Route path='/signup' element={<Signup />} />
      {role === "master" && <Route path='/master' element={<Master/>}></Route>}
      {role === "student" &&<Route path='/student' element={<StudentPage/>}></Route>}
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
  </BrowserRouter>
  <MyToast />
    </>
  );
}

export default App;
