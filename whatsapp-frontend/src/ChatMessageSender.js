import React from 'react';

function ChatMessageSender({message}) {
  return <div>
          <p className="text-base p-3 w-fit rounded-lg bg-white mb-7 relative">
            <span className="absolute -top-6 font-semibold text-base">{message.name}</span> 
              {message.message}
            <span className="ml-2 text-xs">{message.timestamp}</span>
          </p>
        </div>;
}

export default ChatMessageSender;
