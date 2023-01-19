import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

export default function Navbar() {

    let navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        navigate("/LogIn");
        setOpen(false);
    };

    const handleMenuTwo = () => {
        navigate("/Start");
        setOpen(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-4" to="/" style={{fontSize: 30, fontFamily: "Arial"}}>Talker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div>
                        <button className='btn btn-outline-light dropdown-toggle mx-4' onClick={handleOpen}>Options</button>
                        {open ? (
                            <ul className="menu">
                                <li className="menu-item">
                                    <button onClick={handleMenuOne}>Change account</button>
                                </li>
                                <li className="menu-item">
                                    <button onClick={handleMenuTwo}>Log out</button>
                                </li>
                            </ul>
                        ) : null}
                    </div>
                </div>
            </nav>

        </div>
    )
}
