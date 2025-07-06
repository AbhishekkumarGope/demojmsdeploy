import React from "react";
import TopNavBar from "../TopNavBar";
import Sidebar from "../SideBar";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;
const topNavHeight = 64; // adjust if your TopNavBar has a different height

const AuthorLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, ml: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)` }}>
        {/* Top Navigation Bar */}
        <Box sx={{ position: "fixed", top: 0, left: drawerWidth, right: 0, zIndex: 1100 }}>
          <TopNavBar />
        </Box>

        {/* Scrollable Page Content */}
        <Box
          component="main"
          sx={{
            mt: `${topNavHeight}px`,
            p: 3,
            height: `calc(100vh - ${topNavHeight}px)`,
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthorLayout;
