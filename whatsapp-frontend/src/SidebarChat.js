import { Avatar } from '@mui/material';
import React from 'react';

function SidebarChat() {
  return <div className='flex p-5 cursor-pointer border-b-2 border-solid border-slate-50 hover:bg-slate-50'>
      <Avatar />

      {/* start of sidebar chat info */}
      <div className='ml-4'>
          <h2 className='text-sm mb-2 font-bold'>Room Name</h2>
          <p>This is the last message</p>
      </div>
      {/* end of sidebar chat info */}
  </div>;
}

export default SidebarChat;
