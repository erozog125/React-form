import axios from 'axios';
import React,{useState} from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

export const Form = () => {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");   

  // async await
  const getUsers = async (e) => {
    e.preventDefault();
    // fetch con post
    const response = await fetch("https://backend-edw.herokuapp.com/usuarios");
    const data = await response.json();
    console.log(data);    
  }

  const url = "https://backend-edw.herokuapp.com/usuario";    
  
  const registerUser = (e) => {
    e.preventDefault();
    axios.post(url,{
      name: name,
      username:userName,
      password:password
    })
    .then(response => response)
    .then(data => console.log(data))   
  }
      
  return (
    <>
      <form className='frm-register'>
        <h2>SIGN UP</h2>
        <hr />
        <div className="data">
          <input onChange={e=>setName(e.target.value)} type="text" name="" id="name-1" placeholder='Full Name...' />
          <FaUserCircle />
        </div>            
          <div className="data">
            <input onChange={e=>setUserName(e.target.value)} type="text" name="" id="username-1" placeholder='UserName...' />
            <FaUserCircle />
        </div>            
        <div className="data">
          <input onChange={e=>setPassword(e.target.value)} type="password" name="" id="pass-1" placeholder='Password...' />
          <RiLockPasswordFill />
        </div>
        <a href="#">Forgot your password!</a>
        <div className="buttons">                  
          <button onClick={getUsers} className='btn-secundary'>Sign In</button>
          <button onClick={registerUser} className='btn-form'>Register</button>
        </div>
      </form>    
    </>
  )
}
