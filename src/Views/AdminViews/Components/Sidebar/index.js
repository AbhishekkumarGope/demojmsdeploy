import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import ArticleIcon from '@mui/icons-material/Article';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import SideBarCSS from '../../../../css/CommonCSS/SideBarCSS';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const styles = SideBarCSS(theme, location.pathname);

  const menuItems = [
    { text: 'Submission', icon: <ArticleIcon />, path: '/admin/submission' },
    { text: 'Volume Management', icon: <BookIcon />, path: '/admin/submission/volume' },
    { text: 'Accepted article', icon: <LibraryAddCheckIcon />, path: '/admin/submission/accept' }
  ];

  const bottomItems = [
    { text: 'Settings', icon: <SettingsIcon />, path: '/author/dashboard/account' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  return (
    <Box sx={styles.main}>
      {/* Top Navigation Items */}
      <Box sx={styles.topList}>
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem
                key={item.text}
                button
                component={Link}
                to={item.path}
                sx={styles.listItem(isActive)}
                aria-current={isActive ? 'page' : undefined}
              >
                <ListItemIcon sx={styles.listIcon(isActive)}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Bottom Navigation Items */}
      <Box sx={styles.bottomList}>
        <Divider />
        <List>
          {bottomItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem
                key={item.text}
                button
                component={Link}
                to={item.path}
                sx={styles.listItem(isActive)}
                aria-current={isActive ? 'page' : undefined}
              >
                <ListItemIcon sx={styles.listIcon(isActive)}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;