import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [emailOtp, setemailOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



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
          <input onChange={(e)=> setName(e.targate.value)} placeholder='Email' />
        </div>
        <div className='input'>
          <label>Email OTP:</label>
          <input onChange={(e)=> setName(e.targate.value)} placeholder='OTP' />
        </div>
        <div className='input'>
          <label>Mobile:</label>
          <input onChange={(e)=> setName(e.targate.value)} placeholder='Mobile' />
        </div>
        <div className='input'>
          <label>Mobile OTP:</label>
          <input onChange={(e)=> setName(e.targate.value)} placeholder='OTP' />
        </div>
        <div className='input'>
          <label>Password:</label>
          <input onChange={(e)=> setName(e.targate.value)} placeholder='Password' />
        </div>
        <div className='input'>
          <label>Confirm Password:</label>
          <input onChange={(e)=> setName(e.targate.value)} placeholder='Confirm PassWord' />
        </div>
        <Link>Google</Link>
        <Link>github</Link>
        <Link>facebook</Link>
      </form>
    </div>
  );
};

export default SignUp;