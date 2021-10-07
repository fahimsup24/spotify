import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  DoubleArrow,
  QueueMusic,
  Person,
  Album,
  LibraryMusic,
  PlayCircle,
} from "@mui/icons-material";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProSidebar collapsed={collapsed}>
      <div>
        <DoubleArrow
          onClick={() => setCollapsed(!collapsed)}
          style={
            collapsed
              ? { float: "right", cursor: "pointer" }
              : {
                  float: "right",
                  transform: "rotate(180deg)",
                  cursor: "pointer",
                }
          }
        />
      </div>
      <div style={collapsed ? { display: "none" } : { padding: "0rem 2rem" }}>
        <h6>Library</h6>
      </div>
      <Menu popperArrow="true" iconShape="circle">
        <MenuItem icon={<LibraryMusic />}>Playlists</MenuItem>
        <MenuItem icon={<Person />}>Artist</MenuItem>
        <MenuItem icon={<Album />}>Albums</MenuItem>
        <MenuItem icon={<PlayCircle />}>Songs</MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
