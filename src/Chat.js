import { Avatar, IconButton } from '@mui/material'
import React, { useEffect , useState } from 'react'
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'
import { useParams } from 'react-router';
import db from './firebase';

function Chat() {
  const [seed, setSeed] = useState("")
  const [input, setInput] = useState('')
  const { roomId } = useParams()
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [roomId])

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))

      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp' , "asc").onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
    }
  }, [roomId])

  const sendMessage = (e) => {
    e.preventDefault()
    setInput("")
  }


  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className='chat__name'>{message.name}</span>
          {message.message}
          <span className='chat__timestamp'>
            {new Date(message.timestamp?.toDate()).toUTCString}
          </span>
        </p>
        ))}
        
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input 
            type="text" 
            placeholder='Type a message' 
            value={input} 
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat