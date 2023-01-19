import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import Home from './pages/Home';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Start from './pages/Start';
import NowLogIn from './pages/NowLogIn';
import { useState } from 'react';

function App() {
  const [id, SetID] = useState(0);
  const [name, SetName] = useState(0);

  const toggleId = (valID) => {
    SetID(valID);
  }

  const toggleName = (valName) => {
    SetName(valName);
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Main" element={<Main id = {id} name = {name}/>} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/LogIn" element={<LogIn toggleId = {toggleId} toggleName = {toggleName}/>} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/" element={<Start />} />
          <Route exact path="/NowLogIn" element={<NowLogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
