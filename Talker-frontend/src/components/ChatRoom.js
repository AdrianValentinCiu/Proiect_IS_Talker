import React, { useEffect, useState } from 'react'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import "../indexMain.css"
//import "../index.css"
import background from '../img/welcome.png';
import axios from "axios"; 

var stompClient =null;
const ChatRoom = (props) => {
    const [nume1, setnume1] = useState("");

    const set_nume1 = (valnume1) => {
        setnume1(valnume1);
    }

    const [id1, setID1] = useState(0);

    const set_id1 = (valID) => {
        setID1(valID);
    }

    const [nume2, setnume2] = useState("");

    const set_nume2 = (valnume2) => {
        setnume2(valnume2);
    }

    const [id2, setID2] = useState(0);

    const set_id2 = (valID) => {
        setID2(valID);
    }
    const getIn1 =async (name)=>{
        console.log("asdasd");
        console.log("usernameeeeee ", props.id);
          console.log("passworddddddd ", props.name);
        const result = await axios.get(`http://localhost:8080/api/v1/user/${name}`);
        //return <div>{result.data.id}</div>
        set_nume1(result.data.firstName);
        set_id1(result.data.id);
        console.log("RESULT ", result.data);
    }
    const getIn2 =async (name)=>{
        console.log("asdasd");
        console.log("usernameeeeee ", props.id);
          console.log("passworddddddd ", props.name);
        const result = await axios.get(`http://localhost:8080/api/v1/user/${name}`);
        //return <div>{result.data.id}</div>
        set_nume2(result.data.firstName);
        set_id2(result.data.id);
        console.log("RESULT ", result.data);
    }
    const [nume3, setnume3] = useState("");

    const set_nume3 = (valnume3) => {
        setnume3(valnume3);
    }

    const [id3, setID3] = useState(0);

    const set_id3 = (valID) => {
        setID3(valID);
    }
    const getIn3 =async (name)=>{
        console.log("asdasd");
        console.log("usernameeeeee ", props.id);
          console.log("passworddddddd ", props.name);
        const result = await axios.get(`http://localhost:8080/api/v1/user/${name}`);
        //return <div>{result.data.id}</div>
        set_nume3(result.data.firstName);
        set_id3(result.data.id);
        console.log("RESULT ", result.data);
    }
    const [nume4, setnume4] = useState("");

    const set_nume4 = (valnume4) => {
        setnume4(valnume4);
    }

    const [id4, setID4] = useState(0);

    const set_id4 = (valID) => {
        setID4(valID);
    }
    const getIn4 =async (name)=>{
        console.log("asdasd");
        console.log("usernameeeeee ", props.id);
          console.log("passworddddddd ", props.name);
        const result = await axios.get(`http://localhost:8080/api/v1/user/${name}`);
        //return <div>{result.data.id}</div>
        set_nume4(result.data.firstName);
        set_id4(result.data.id);
        console.log("RESULT ", result.data);
    }
    const [nume5, setnume5] = useState("");

    const set_nume5 = (valnume5) => {
        setnume5(valnume5);
    }

    const [id5, setID5] = useState(0);

    const set_id5 = (valID) => {
        setID5(valID);
    }
    const getIn5 =async (name)=>{
        console.log("asdasd");
        console.log("usernameeeeee ", props.id);
          console.log("passworddddddd ", props.name);
        const result = await axios.get(`http://localhost:8080/api/v1/user/${name}`);
        //return <div>{result.data.id}</div>
        set_nume5(result.data.firstName);
        set_id5(result.data.id);
        console.log("RESULT ", result.data);
    }
    const [nume6, setnume6] = useState("");

    const set_nume6 = (valnume6) => {
        setnume6(valnume6);
    }

    const [id6, setID6] = useState(0);

    const set_id6 = (valID) => {
        setID6(valID);
    }
    const getIn6 =async (name)=>{
        console.log("asdasd");
        console.log("usernameeeeee ", props.id);
          console.log("passworddddddd ", props.name);
        const result = await axios.get(`http://localhost:8080/api/v1/user/${name}`);
        //return <div>{result.data.id}</div>
        set_nume6(result.data.firstName);
        set_id6(result.data.id);
        console.log("RESULT ", result.data);
    }
    const [privateChats, setPrivateChats] = useState(new Map()); 
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [userData, setUserData] = useState({
        userId: '',
        receiverId: '',
        connected: false,
        message: ''
      });
    useEffect(() => {
      console.log(userData);
    }, [userData]);

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/api/v1/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/'+userData.userId+'/private', onPrivateMessage);
        userJoin();
    }

    const userJoin=()=>{
          var chatMessage = {
            senderId: userData.userId,
            status:"JOIN"
          };
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        switch(payloadData.status){
            case "JOIN":
                if(!privateChats.get(payloadData.senderId)){
                    privateChats.set(payloadData.senderId,[]);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }
    
    const onPrivateMessage = (payload)=>{
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderId)){
            privateChats.get(payloadData.senderId).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderId,list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }

    const sendValue=()=>{
        if (stompClient) {
            var chatMessage = {
            senderId: userData.userId,
            message: userData.message,
            status:"MESSAGE"
            };
            console.log(chatMessage);
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            setUserData({...userData,"message": ""});
        }
    }

    const sendPrivateValue=()=>{
        if (stompClient) {
          var chatMessage = {
            senderId: userData.userId,
            receiverId:tab,
            message: userData.message,
            status:"MESSAGE"
          };
          
          if(userData.userId !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
    }

    const handleuserId=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"userId": value});
    }

    const registerUser=()=>{
        connect();
    }

    return (
    <div className="container">
        {userData.connected?
        <div>
            <img src={background} width="100" style={{ position: 'relative' }} alt="computer" />   
            <div className="chat-box">
                <div className="member-list" div data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '500px', overflowX: 'hidden', overflowY: 'scroll' }}>
                    <ul className="list-unstyled mb-0">
                        <li onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
                        {[...privateChats.keys()].map((name,index)=>(
                            <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>
                                {name==1?
                                    <a href="#!">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                            </div>
                                            <div className="pt-1">
                                                <button onClick={getIn1(name)}></button>
                                                <p>ID: {id1}</p>
                                                <p className="fw-bold mb-0">{nume1}</p>
                                            </div>
                                        </div>
                                    </a>
                                :name==2?
                                    <a href="#!">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                            </div>
                                            <div className="pt-1">
                                                <button onClick={getIn2(name)}></button>
                                                <p>ID: {id2}</p>
                                                <p className="fw-bold mb-0">{nume2}</p>
                                            </div>
                                        </div>
                                    </a>
                                :name==3?
                                    <a href="#!" className="d-flex justify-content-between">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                            </div>
                                            <div className="pt-1">
                                                <button onClick={getIn3(name)}></button>
                                                <p>ID: {id3}</p>
                                                <p className="fw-bold mb-0">{nume3}</p>
                                            </div>
                                        </div>
                                    </a>
                                :name==4?
                                    <a href="#!" className="d-flex justify-content-between">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                            </div>
                                            <div className="pt-1">
                                                <button onClick={getIn4(name)}></button>
                                                <p>ID: {id4}</p>
                                                <p className="fw-bold mb-0">{nume4}</p>
                                            </div>
                                        </div>
                                    </a>
                                :name==5?
                                    <a href="#!" className="d-flex justify-content-between">
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                            </div>
                                            <div className="pt-1">
                                                <button onClick={getIn5(name)}></button>
                                                <p>ID: {id5}</p>
                                                <p className="fw-bold mb-0">{nume5}</p>
                                            </div>
                                        </div>
                                    </a>
                                :
                                <a href="#!" className="d-flex justify-content-between">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                        </div>
                                        <div className="pt-1">
                                            <button onClick={getIn6(name)}></button>
                                            <p>ID: {id6}</p>
                                            <p className="fw-bold mb-0">{nume6}</p>
                                        </div>
                                    </div>
                                </a>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
                {tab==="CHATROOM" &&
                    <div className="chat-content">
                        <ul className="chat-messages" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '500px', overflowX: 'hidden', overflowY: 'scroll' }}>
                            {publicChats.map((chat,index)=>(
                                <li className={`message ${chat.senderId === userData.userId && "self"}`} key={index}>
                                    {chat.senderId !== userData.userId && <div className="avatar">
                                    {chat.senderId==1?
                                    <div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    </div>
                                    :chat.senderId==2?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==3?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    }
                                    </div>}
                                    <div className="message-data">{chat.message}</div>
                                    {chat.senderId === userData.userId && <div className="avatar self">
                                    {chat.senderId==1?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==2?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==3?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    }
                                    </div>}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} /> 
                            <button type="button" className="send-button" onClick={sendValue}>Send</button>
                        </div>
                    </div>
                }
                {tab!=="CHATROOM" &&
                    <div className="chat-content">
                        <ul className="chat-messages"  data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '500px', overflowX: 'hidden', overflowY: 'scroll' }}>
                            {[...privateChats.get(tab)].map((chat,index)=>(
                                <li className={`message ${chat.senderId === userData.userId && "self"}`} key={index}>
                                    {chat.senderId !== userData.userId && <div className="avatar">
                                    {chat.senderId==1?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==2?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==3?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    }
                                    </div>}
                                    <div className="message-data">{chat.message}</div>
                                    {chat.senderId === userData.userId && <div className="avatar self">
                                    {chat.senderId==1?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==2?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :chat.senderId==3?
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    :
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                    alt="avatar 1" style={{ width: '40px', height: '100%' }}/>
                                    }
                                    </div>}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} /> 
                            <button type="button" className="send-button" onClick={sendPrivateValue}>Send</button>
                        </div>
                    </div>
                }
            </div>
        </div>
        :
        <div className="register">
            <input
                id="user-name"
                placeholder="Enter your ID"
                name="userId"
                value={userData.userId}
                onChange={handleuserId}
                margin="normal"
              />
              <button type="button" onClick={registerUser}>
                    connect
              </button> 
        </div>}
    </div>
    )
}

export default ChatRoom
