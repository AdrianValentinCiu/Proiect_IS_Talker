import React from 'react';
import { Link,} from "react-router-dom";
import background from '../img/welcome.png'

export default function NowLogIn() {
  return (
    <div>
      <img src={background} width="300" style={{position: 'relative'}} alt="computer" />
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background: 'white'}}>
            <h2 className='text-center m-4'> Welcome to Talker </h2>
            <p className='max-4'>You are register, go to Log-in page or go back to start</p>
            <Link className='btn btn-primary mx-4' to="/LogIn">Log-in</Link>
            <Link className='btn btn-primary mx-4' to="/">Start</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
