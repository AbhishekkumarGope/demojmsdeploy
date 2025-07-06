import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  useTheme
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import AcceptedCSS from '../../../css/AdminViews/AcceptedCSS';

const AcceptedArticle = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const styles = AcceptedCSS(theme);

  useEffect(() => {
    const accepted = [
      { id: 1, title: 'Any Title', author: 'Abhishek' },
      { id: 2, title: 'AI in Healthcare', author: 'Priya' },
    ];
    setArticles(accepted);
  }, []);

  const handlePublish = (title) => {
    alert(`Publishing: ${title}`);
  };

  const handleView = (id) => {
    navigate(`/admin/submission/accept/${id}`);  // Dynamic route for article details
  };

  return (
    <Box sx={styles.main}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Accepted Articles
      </Typography>
      <Paper sx={{ p: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={styles.tableRow}>
                <TableCell sx={styles.tableCell1}><strong>Title</strong></TableCell>
                <TableCell sx={styles.tableCell1}><strong>Author</strong></TableCell>
                <TableCell sx={styles.tableCell2}><strong>View</strong></TableCell>
                <TableCell sx={styles.tableCell2}><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleView(article.id)}>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => handlePublish(article.title)}>
                      Publish
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AcceptedArticle;
