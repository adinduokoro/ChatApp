import { Avatar, IconButton } from '@mui/material'
import React, { useEffect , useState } from 'react'
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'

function Chat() {
  const [seed, setSeed] = useState("")
  const [input, setInput] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    setInput("")
  }


  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>Room Number</h3>
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
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className='chat__name'>Adi Okoro</span>
          Hey Guys
          <span className='chat__timestamp'>12:30pm</span>
        </p>
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