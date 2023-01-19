import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from '../img/welcome.png';

export default function LogIn(props) {

  let navigate = useNavigate();

  //trebuie sa stocam informatia in interiorul unui obiect
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const [isAvailable, setAvailable] = useState(false);

  const toggleAvailable = (valX) => {
    setAvailable(valX);
  }

  const [id, setID] = useState(0);

  const set_id = (valID) => {
    setID(valID);
  }

  const onSubmit =async (e) => {
      e.preventDefault();
      console.log(isAvailable);
      const result = await axios.get(`http://localhost:8080/api/v1/user/login/${email}/${password}`);
      console.log("username ", email);
      console.log("password ", password);
        console.log("rezultat ", result.data);
      props.toggleId(result.data.id);
      props.toggleName(result.data.lastName);
      toggleAvailable(true);
      set_id(result.data.id);
        console.log(isAvailable)
      console.log("asdas ", props)
    };

  return (
    <div>
      <img src={background} width="300" style={{position: 'relative'}} alt="computer" />
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background: 'white'}}>
            <h2 className='text-center m-4'> Log In </h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                  Email
                </label>
                <input
                  type={"text"}
                  className='form-control'
                  placeholder='Enter your e-mail'
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
              {isAvailable === true ?
              <div>
                <p>This is your ID: {id}</p>
                <Link className='btn btn-danger mx-2' to="/Main">
                  Next
                </Link>
              </div>
              :
                <p>Wait for your ID</p>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
