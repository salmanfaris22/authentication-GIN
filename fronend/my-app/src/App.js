
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logine from './components/Auth/Logine';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import HomeMain from './components/Home/HomeMain';

function App() {
  const [logged,setIsLogged]=useState(false)
  useEffect(()=>{
   const user = localStorage.getItem("id")
    if(user){
      setIsLogged(user)
    }
  },[])


  return (
    <div className="App">
  
<ToastContainer/>
  <Routes>
    <Route path='login' element={<Logine  setIsLogged={setIsLogged}/>}/>
    <Route path='register' element={<Register/>}/>
    {logged ?
     <Route path='/' element={<Home logged={logged} setIsLogged={setIsLogged}/>}/>
    :
      <Route path='/' element={<HomeMain />}/>
    }
    
  </Routes>
     {/* <Register/>
     <Logine/>
     <Home/> */}
    </div>
  );
}

export default App;
