import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import React from "react";
import ChatMessageReciever from "./ChatMessageReciever";
import ChatMessageSender from "./ChatMessageSender";

function Chat({messages}) {
  console.log("messages in chat : ", messages)
  return (
    <div className="flex flex-col basis-chatbar-width">
      
      {/* start of chat header */}
      <div className="p-3 flex items-center border-b-2 border-solid border-l-whatsapp-body-bg">
        <Avatar />
        
        {/* start of info section for chat header */}
        <div className="flex-1 pl-5">
          <h3 className="font-bold mb-1">Room Name</h3>
          <p className="text-slate-500">Last seen at ...</p>
        </div>
        {/* end of info section for chat header */}
      
        {/* start of chat header right */}
        <div>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        {/* end of chat header right */}

      </div>
      {/* end of chat header */}

      {/* start of chat body */}
      <div className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 bg-repeat bg-center p-7 overflow-auto">
        
        {messages.map(message => {
          <ChatMessageReciever message={{"name":"narendra vida", "message":"temp message", "timestamp":"10:38 22 JAN"}} />
        })}
        
      </div>
      {/* end of chat body */}

      {/* start of chat footer */}
      <div className="flex justify-between items-center h-16 border-t-2 border-solid border-slate-200">
        <InsertEmoticon className="text-gray-500 mx-1" />
        <form className="flex-1 flex">
          <input
            className="flex-1 rounded-3xl p-3 border-none"
            placeholder="Type a message"
            type="text"
          />
          <button className="hidden" onClick="{sendMessage}" type="submit">Send a message</button>
        </form>
        <MicIcon className="text-gray-500 mx-1" />
      </div>
      {/* end of chat footer */}

    </div>
  );
}

export default Chat;
