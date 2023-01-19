import React from 'react'
import ChatRoom from './components/ChatRoom'

const Main = (props) => {
  console.log(props);
  return (
    <ChatRoom id = {props.id} name = {props.name}/>
  )
}

export default Main;

