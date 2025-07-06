import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardCSS from '../../../css/AuthorViews/DashboardCSS';

const MainContent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const styles = DashboardCSS(theme);
  return (
    <Box
      component="main"
      sx={styles.main}
    >
      <Typography variant="h5" fontWeight="bold">
        Welcome, Author!
      </Typography>
      <Typography variant="body1" sx={styles.textDetails}>
        You have submitted 3 articles. 1 is under review, and 2 are published.
      </Typography>

      <Button variant="contained" sx={styles.button} onClick={() => navigate('/author/dashboard/submit')}>
        New Submission
      </Button>
    </Box>
  );
};

export default MainContent;
