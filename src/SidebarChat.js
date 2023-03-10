import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import db from './firebase'
import './SidebarChat.css'
import {Link} from 'react-router-dom'

function SidebarChat({ id, name , addNewChat }) {

  const [seed,setSeed] = useState('')
  const [message,setMessage] = useState("")

  useEffect(() => {
    db.collection('rooms').doc(id).collection('messages').orderBy("timestamp" , "desc").onSnapshot(snapshot => setMessage(snapshot.docs.map((doc) => doc.data())))
  }, [])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt("Please enter a name for the chat")

    if(roomName){
      db.collection('rooms').add({
        name:roomName
      })
    }
  }

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{message[0]?.message}</p>
        </div>
      </div>
    </Link>
  ):(
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat