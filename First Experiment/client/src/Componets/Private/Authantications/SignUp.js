import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [emailOtp, setemailOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const EmailSendOtpHandler = async()=>{
    try {
      const res = await axios.get('http://localhost:8080/emailotp/');
      const sms = await res.json();
      console.log(sms);
    } catch (error) {
      console.log('Email send OTP Error' ,error)
    }
      
  }
  const MobileOtpHandler = ()=>{
      
  }


  return (
    <div style={{width: '100%'}} className='signup-ct'>
      <h1 style={{textAlign: 'center'}}>Create Account</h1>
      <form style={{width: '40%', margin: 'auto', display: 'flex', flexDirection: 'column'}}>
        <div className='input'>
          <label>Name:</label>
          <input onChange={(e)=> setName(e.targate.value)} placeholder='Name' />
        </div>
        <div className='input'>
          <label>Email:</label>
          <input onChange={(e)=> setemail(e.targate.value)} placeholder='Email' />
        </div>
        <button onClick={()=> EmailSendOtpHandler()}>Send OTP</button>
        <div className='input'>
          <label>Email OTP:</label>
          <input onChange={(e)=> setemailOtp(e.targate.value)} placeholder='OTP' />
        </div>
        <div className='input'>
          <label>Mobile:</label>
          <input onChange={(e)=> setMobile(e.targate.value)} placeholder='Mobile' />
        </div>
        <button onClick={MobileOtpHandler()}>Send OTP</button>
        <div className='input'>
          <label>Mobile OTP:</label>
          <input onChange={(e)=> setMobileOtp(e.targate.value)} placeholder='OTP' />
        </div>
        <div className='input'>
          <label>Password:</label>
          <input onChange={(e)=> setPassword(e.targate.value)} placeholder='Password' />
        </div>
        <div className='input'>
          <label>Confirm Password:</label>
          <input onChange={(e)=> setConfirmPassword(e.targate.value)} placeholder='Confirm PassWord' />
        </div>
        <Link>Google</Link>
        <Link>github</Link>
        <Link>facebook</Link>
      </form>
    </div>
  );
};

export default SignUp;