import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';
import SideBarCSS from '../../../../css/CommonCSS/SideBarCSS';

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const styles = SideBarCSS(theme);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/author/dashboard' },
    { text: 'Submit', icon: <ArticleIcon />, path: '/author/dashboard/submit' },
    { text: 'Track', icon: <TrackChangesIcon />, path: '/author/dashboard/track' },
  ];

  const bottomItems = [
    { text: 'Settings', icon: <SettingsIcon />, path: '/author/dashboard/account' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  return (
    <Box sx={styles.main}>
      {/* Top Menu Items */}
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
                selected={isActive}
                sx={styles.listItem(isActive)}
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

      {/* Bottom Items */}
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
                selected={isActive}
                sx={styles.listItem(isActive)}
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
