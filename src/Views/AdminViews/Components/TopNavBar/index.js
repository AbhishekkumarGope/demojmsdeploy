import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import TopNavBarCSS from '../../../../css/CommonCSS/TopNavBarCSS';

const TopNavBar = () => {
  const theme = useTheme();
  const styles = TopNavBarCSS(theme);

  return (
    <AppBar sx={styles.AppBar}>
      <Toolbar sx={styles.ToolBar}>
        <Box sx={styles.logoBox}>
          <Typography variant="h5" sx={styles.logoText}>
            JMS
          </Typography>
          <Typography variant="caption" sx={styles.subText}>
            admin
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
