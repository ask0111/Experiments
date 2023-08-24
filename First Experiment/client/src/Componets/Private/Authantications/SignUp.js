import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signup-ct'>
      <h1>Create Account</h1>
      <form>
        <div className='input'>
          <label>Name:</label>
          <input placeholder='Name' />
        </div>
        <div className='input'>
          <label>Email:</label>
          <input placeholder='Email' />
        </div>
        <div className='input'>
          <label>Email OTP:</label>
          <input placeholder='OTP' />
        </div>
        <div className='input'>
          <label>Mobile:</label>
          <input placeholder='Mobile' />
        </div>
        <div className='input'>
          <label>Mobile OTP:</label>
          <input placeholder='OTP' />
        </div>
        <div className='input'>
          <label>Password:</label>
          <input placeholder='Password' />
        </div>
        <div className='input'>
          <label>Confirm Password:</label>
          <input placeholder='Confirm PassWord' />
        </div>
        <Link>Google</Link>
        <Link>github</Link>
        <Link>facebook</Link>
      </form>
    </div>
  );
};

export default SignUp;