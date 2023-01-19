import React, { useEffect, useState } from 'react'
import "./start.css";
import background from '../img/welcome.png';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import '../index.css';

export default function Home() {
    return (
        <div className='mx-5'>
            <div className="row">
                <div className="col-md-12">
                    <img src={background} width="100" style={{ position: 'relative' }} alt="computer" />
                    <div className="card mt-8" id="chat3" style={{ borderradius: '36px', height: '80vh' }}>
                        <div className="card-body">
                            <div className="row" style={{ height: '75vh' }}>
                                <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">

                                    <div className="p-3">

                                        <div className="input-group rounded mb-3 border">
                                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                                aria-describedby="search-addon" />
                                            <span className="input-group-text border-0" id="search-addon">
                                                <i className="fas fa-search"></i>
                                            </span>
                                        </div>

                                        <div data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '500px', overflowX: 'hidden', overflowY: 'scroll' }}>
                                            <ul className="list-unstyled mb-0">
                                                <li className="p-2 border-bottom">
                                                    <a href="#!" className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                <span className="badge bg-success badge-dot"></span>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="fw-bold mb-0">Atitienei Stefan Costin</p>
                                                                <p className="small text-muted">Salut, ce faci?</p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Acum</p>
                                                            <span className="badge bg-danger rounded-pill float-end">3</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="p-2 border-bottom">
                                                    <a href="#!" className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                <span className="badge bg-warning badge-dot"></span>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="fw-bold mb-0">Ciu Adrian Valentin</p>
                                                                <p className="small text-muted">Am ajuns acum 5 minute</p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Acum 5 minute</p>
                                                            <span className="badge bg-danger rounded-pill float-end">2</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="p-2 border-bottom">
                                                    <a href="#!" className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                <span className="badge bg-success badge-dot"></span>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="fw-bold mb-0">Mihai Rusu</p>
                                                                <p className="small text-muted">Salut</p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Ieri</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="p-2 border-bottom">
                                                    <a href="#!" className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                <span className="badge bg-danger badge-dot"></span>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="fw-bold mb-0">Ioana </p>
                                                                <p className="small text-muted"></p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Acum</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="p-2 border-bottom">
                                                    <a href="#!" className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                <span className="badge bg-warning badge-dot"></span>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="fw-bold mb-0">Mama</p>
                                                                <p className="small text-muted">Ce faci?</p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Acum</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="p-2">
                                                    <a href="#!" className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                <span className="badge bg-success badge-dot"></span>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="fw-bold mb-0">Ionut Calenciuc</p>
                                                                <p className="small text-muted">hei</p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Acum o saptamana</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-7 col-xl-8">
                                    <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                                        style={{ position: 'relative', height: '500px', overflowX: 'hidden', overflowY: 'scroll' }}>
                                                                                
                                        <div className="d-flex flex-row justify-content-start">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                            <div>
                                                <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>Salut, esti?</p>
                                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row justify-content-end">
                                            <div>
                                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Inca nu, abia am plecat de la facultate</p>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                            </div>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                        </div>

                                        <div className="d-flex flex-row justify-content-start">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                            <div>
                                                <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>Sa ma anunti cand ajungi
                                                </p>
                                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row justify-content-end">
                                            <div>
                                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ok. Am ajuns acum, care era urgenta?</p>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                            </div>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                        </div>

                                        <div className="d-flex flex-row justify-content-start">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                            <div>
                                                <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>Aveam nevoie sa ma ajuti putin
                                                    cu tema de la Ingineria Sistemelor, nu imi iese ceva si nu inteleg cum trebuie sa fac. Ma ajuti te rog?
                                                </p>
                                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row justify-content-end">
                                            <div>
                                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Sigur ca da, spune</p>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                            </div>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                        </div>

                                    </div>

                                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                            alt="avatar 3" style={{ width: '45px', height: '100%' }} />
                                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                                            placeholder="Type message" />
                                        <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                                        <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                                        <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
