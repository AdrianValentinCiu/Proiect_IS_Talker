import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from '../img/welcome.png';

export default function Register() {

  let navigate = useNavigate();

  //trebuie sa stocam informatia in interiorul unui obiect
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { firstName, lastName, email, password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post("http://localhost:8080/api/v1/registration", user);
    navigate("/NowLogIn");
  };
  
  //style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}
  return (
    <div>
      <img src={background} width="300" style={{position: 'relative'}} alt="computer" />
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background: 'white'}}>
            <h2 className='text-center m-4'> Register user </h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='First name' className='form-label'>
                  First name
                </label>
                <input
                  type={"text"}
                  className='form-control'
                  placeholder='Enter your first name'
                  name='firstName'
                  value={firstName}
                  onChange={(e) => onInputChange(e)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Last name' className='form-label'>
                  Last name
                </label>
                <input
                  type={"text"}
                  className='form-control'
                  placeholder='Enter your last name'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => onInputChange(e)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                  Email
                </label>
                <input
                  type={"text"}
                  className='form-control'
                  placeholder='Enter your e-mail address'
                  name='email'
                  value={email}
                  onChange={(e) => onInputChange(e)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Password' className='form-label'>
                  Password
                </label>
                <input
                  type={"password"}
                  className='form-control'
                  placeholder='Enter your password'
                  name='password'
                  value={password}
                  onChange={(e) => onInputChange(e)} />
              </div>
              <button type="submit" className='btn btn-outline-primary'>
                Submit
              </button>
              <Link className='btn btn-danger mx-2' to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
