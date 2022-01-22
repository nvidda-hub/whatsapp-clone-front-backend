import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  // to store the messages
  const [messages, setMessages] = useState([]);

  // for fetching initial messages from backend using axios 
  useEffect(()=>{
    axios.get('/api/v1/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('bb7321c794c2ece60451', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
      channel.bind('inserted', (newMessage)=> {
        setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log("messages :", messages)

  return (
    <div className="grid place-items-center min-h-screen bg-whatsapp-bg">
      <div className="flex bg-whatsapp-body-bg -mt-12 h-90v w-90v shadow-lg shadow-black">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
