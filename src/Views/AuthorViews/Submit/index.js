import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Paper, Grid,
  Table, TableHead, TableRow, TableCell, TableBody,
  useTheme, Divider, Chip, Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AuthorDialog from '../Components/AddAuthor';
import SubmitCSS from '../../../css/AuthorViews/SubmitCSS';

// ✅ Snackbar Alert Component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SubmitMainContent = () => {
  const theme = useTheme();
  const styles = SubmitCSS(theme);

  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({ title: '', file: null });
  const [dialogs, setDialogs] = useState({ author: false });
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDialogOpen = (index = null) => {
    setEditingAuthor(index !== null ? authors[index] : null);
    setEditingIndex(index);
    setDialogs((prev) => ({ ...prev, author: true }));
  };

  const handleDialogClose = () => {
    setDialogs((prev) => ({ ...prev, author: false }));
    setEditingAuthor(null);
    setEditingIndex(null);
  };

  const handleAddOrEditAuthor = (author, index) => {
    if (index !== null) {
      const updated = [...authors];
      updated[index] = author;
      setAuthors(updated);
    } else {
      setAuthors((prev) => [...prev, author]);
    }
    handleDialogClose();
  };

  const handleRemoveAuthor = (index) => {
    const updated = [...authors];
    updated.splice(index, 1);
    setAuthors(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return alert('Title is required');
    if (!formData.file) return alert('PDF file is required');
    if (authors.length === 0) return alert('Please add at least one author');

    // ✅ Frontend-only success
    setFormData({ title: '', file: null });
    setAuthors([]);
    setSnackbarOpen(true);
  };

  return (
    <Box component="main" sx={styles.main}>
      <Paper sx={styles.paper}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          New Article Submission
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                <ArticleIcon fontSize="small" /> Article Title
              </Typography>
              <TextField
                label="Enter the title of your article"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                <PersonAddAltIcon fontSize="small" /> Authors
              </Typography>
              <Button onClick={() => handleDialogOpen()} sx={{ mt: 1 }} variant="outlined">
                + Add Author
              </Button>

              {authors.length > 0 && (
                <Box mt={2}>
                  <Paper variant="outlined">
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Affiliation</TableCell>
                          <TableCell>Country</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {authors.map((a, index) => (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell sx={{ fontWeight: a.corresponding ? 'bold' : 'normal' }}>
                              {a.name}
                              {a.corresponding && (
                                <Chip
                                  label="Corresponding"
                                  color="primary"
                                  size="small"
                                  sx={{ ml: 1 }}
                                />
                              )}
                            </TableCell>
                            <TableCell>{a.affiliation}</TableCell>
                            <TableCell>{a.country}</TableCell>
                            <TableCell>{a.email}</TableCell>
                            <TableCell align="right">
                              <Button size="small" onClick={() => handleDialogOpen(index)}>Edit</Button>
                              <Button size="small" color="error" onClick={() => handleRemoveAuthor(index)}>Remove</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </Box>
              )}
            </Grid>

            <AuthorDialog
              open={dialogs.author}
              onClose={handleDialogClose}
              onChange={handleAddOrEditAuthor}
              initialData={editingAuthor}
              editingIndex={editingIndex}
            />

            <Grid item xs={12}>
              <Typography variant="h6" sx={styles.sectionTitle}>
                <AttachFileIcon fontSize="small" /> Upload PDF
              </Typography>
              <Button variant="outlined" component="label" sx={{ mt: 1 }}>
                Select PDF File
                <input
                  type="file"
                  name="file"
                  accept=".pdf"
                  hidden
                  onChange={handleChange}
                />
              </Button>
              {formData.file && (
                <Typography variant="body2" sx={styles.fileInfo}>
                  Selected File: {formData.file.name}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Button type="submit" variant="contained" size="large">
                Submit Article
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* ✅ Snackbar with Alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Article submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SubmitMainContent;
