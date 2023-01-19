import React from 'react';
import { Link,} from "react-router-dom";
import background from '../img/welcome.png'

export default function Start() {
  return (
    <div>
      <img src={background} width="300" style={{position: 'relative'}} alt="computer" />
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background: 'white'}}>
            <h2 className='text-center m-4'> Welcome to Talker </h2>
            <p className='max-4'>If you already have an account, you can Log In here</p>
            <Link className='btn btn-primary mx-4' to="/LogIn">Log In</Link>
            <p className='max-4'>Click on Register button if you don't have an account</p>
            <Link className='btn btn-primary mx-4' to="/Register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
