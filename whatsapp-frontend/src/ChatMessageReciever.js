import React from 'react';

function ChatMessageReciever({message}) {
  console.log("message from chat receiver : ", message)
  return <div>
      <p className="text-base p-3 w-fit rounded-lg bg-green-200 mb-7 ml-auto relative">
            <span className="absolute -top-6 font-semibold text-base">{message.name}</span> 
              {message.message}
            <span className="ml-2 text-xs">{message.timestamp}</span>
          </p>
  </div>;
}

export default ChatMessageReciever;
