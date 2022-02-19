import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export const Form1 = () => {
  return (
    <form className='frm-register' action="">
        <h2>SIGN UP</h2>
        <hr />
        <div className="data">
          <input type="text" name="" id="" placeholder='Full Name...' />
          <FaUserCircle />
        </div>            
        <div className="data">
          <input type="text" name="" id="" placeholder='UserName...' />
          <FaUserCircle />
        </div>            
        <div className="data">
          <input type="password" name="" id="" placeholder='Password...' />
          <RiLockPasswordFill />
        </div>
        <a href="#">Forgot your password!</a>
        <div className="buttons">
          <button className='btn-form'>Register</button>
          <button className='btn-secundary'>Sign In</button>
        </div>
    </form>
  )
}
