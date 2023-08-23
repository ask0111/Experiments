import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products.js';
import './App.css';


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState('')
   

  const Redirect = ()=>{

  }
  const Handler = (props)=>{
    // console.log('props', props)
    setIsLogin(props.isValid);
    setUser(props.user)
  }

  return (
    <BrowserRouter >
      <Routes>
        {
          isLogin ? (<>
          <Route path="/dashboard" element={<Dashboard value={user} />} />
          <Route path="/products" element={<Products />} />
          </>
          ) : Redirect
        }
        <Route path="/*" element={<Login isValidUser={(props)=> Handler(props)} />} />
        
      </Routes>
    </BrowserRouter >
  );
}

export default App;
