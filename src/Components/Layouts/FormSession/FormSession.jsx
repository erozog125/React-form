import React,{useState} from 'react';

import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export const FormSession = () => {
  
  const URL = "https://backend-edw.herokuapp.com/login";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    
    e.preventDefault();

    axios.post(URL, {
      "username":username,
      "password": password
    })
    .then(response => console.log(response))      
  }
  
  return (
    <form className='frm-register'>
        <h2>SIGN IN</h2>
        <hr />                    
        <div className="data">
          <input onChange={e => setUsername(e.target.value)} type="text" name="" id="username-1" placeholder='UserName...' />
          <FaUserCircle />
        </div>            
        <div className="data">
          <input onChange={e => setPassword(e.target.value)} type="password" name="" id="pass-1" placeholder='Password...' />
          <RiLockPasswordFill />
        </div>
        <a href="#">Forgot your password!</a>
        <div className="buttons">                  
          <button onClick={handleLogin} className='btn-secundary'>Sign In</button>
          <button className='btn-form'>Register</button>
        </div>
      </form>    
  )
}
