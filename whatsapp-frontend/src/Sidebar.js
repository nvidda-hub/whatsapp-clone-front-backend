import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function sidebar() {
  return (
    <div className="flex flex-col basis-sidebar-width">

      {/* starting of sidebar header */}
      <div className="flex justify-between p-3 border-r-2 border-solid border-slate-300 ">

        {/* starting of sidebar left */}
        <div>
          <Avatar alt="Loading..." src="./static/images/avatar.jpg" />
        </div>
        {/*ending of sidebar left */}

        {/*starting of sidebar right */}
        <div className="flex items-center justify-between min-w-10vw">
          <IconButton className="mr-2vw text-2xl">
            <ChatIcon />
          </IconButton>
          <IconButton className="mr-2vw text-2xl">
            <DonutLargeIcon />
          </IconButton>
          <IconButton className="mr-2vw text-2xl">
            <MoreVertIcon />
          </IconButton>
        </div>
        {/*ending of sidebar right */}

      </div>

      {/* starting of sidebar search */}
      <div className="flex items-center bg-slate-50 h-10 p-3">
        <div className="flex items-center bg-white w-full rounded-2xl">
          <SearchOutlined className="p-1 text-slate-500" />
          <input className="ml-3 border-none outline-0" placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      {/* ending of sidebar search */}

      {/* start sidebat chat component */}

      <div className="flex-1 bg-white overflow-auto">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
    
      </div>
      {/* end sidebar chat component */}

      {/* ending of sidebar header */}
    </div>
  );
}

export default sidebar;
