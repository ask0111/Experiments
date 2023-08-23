import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';


function Login(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [namerr, setNameErr] = useState(false);
  const [passerr, setPassErr] = useState(false);
  
  const navigate = useNavigate(); 


  const LoginHandler = async (e) => {
    e.preventDefault();
    if(!username){
        setNameErr(true);
    }
    if(!password){
        setPassErr(true);
    }

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      
      
      navigate('/dashboard'); 
      props.isValidUser({user: username, isValid: true});

    } catch (error) {
      console.error('Login failed', error);
      setNameErr(true);
      setPassErr(true);
    }
  };


  const SetNameHandler = (e)=>{
   
    if(username){
        setNameErr(false);
    }
    setUserName(e.target.value);
  }


  const SetPassHandler = (e)=>{
   
    if(password){
        setPassErr(false);
    }
    setPassword(e.target.value)
  }

  return (
    <div className="login-ct">

      <form className="login-form" onSubmit={LoginHandler}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => SetNameHandler(e)}
        />
        {namerr && <p>Please enter valid username</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => SetPassHandler(e)}
          />
          {passerr && <p>Please enter valid Password</p>}
        <button type="submit">Login</button>
      </form>

    </div>
  );
}

export default Login;
