import React, { useState } from 'react';
import { Box, Paper, Typography, Button, useTheme } from '@mui/material';
import VolumeIssueSelector from '../Components/VolumeIssueSelector';
import ArticleForm from '../Components/VolumeForm';
import VolumeCSS from '../../../css/AdminViews/VolumeCSS';

const VolumeManagement = () => {
  const [formData, setFormData] = useState({
    volume: '',
    issue: '',
    title: '',
    authors: '',
    doi: '',
    submissionDate: '',
    acceptanceDate: '',
    abstract: '',
    keywords: '',
    file: null,
  });

  const handleSubmit = () => {
    const required = ['volume', 'issue', 'title', 'authors', 'doi', 'abstract'];
    for (let field of required) {
      if (!formData[field]) {
        alert(`Please fill in ${field}`);
        return;
      }
    }
    console.log(formData);
    alert('Article Published!');
    setFormData({
      volume: '',
      issue: '',
      title: '',
      authors: '',
      doi: '',
      submissionDate: '',
      acceptanceDate: '',
      abstract: '',
      keywords: '',
      file: null,
    });
  };
  
  const theme = useTheme();
  const styles = VolumeCSS(theme);
  
  return (
    <Box sx={styles.main}>
      <Box sx={styles.textContainer}>
        <Typography variant="h5" fontWeight="bold">Volume Management</Typography>
        <Button variant="contained" onClick={handleSubmit}>Publish</Button>
      </Box>

      <Paper sx={styles.articlePaper}>
        <VolumeIssueSelector formData={formData} setFormData={setFormData} />
        <ArticleForm formData={formData} setFormData={setFormData} />
      </Paper>
    </Box>
  );
};

export default VolumeManagement;
