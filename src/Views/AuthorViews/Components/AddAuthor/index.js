import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Typography, Checkbox, FormControlLabel, Grid, InputAdornment
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';

const AuthorDialog = ({ open, onClose, onChange, initialData = null, editingIndex = null }) => {
  const [author, setAuthor] = useState({
    name: '',
    affiliation: '',
    country: '',
    email: '',
    corresponding: false,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setAuthor(initialData || {
        name: '',
        affiliation: '',
        country: '',
        email: '',
        corresponding: false,
      });
      setError('');
    }
  }, [open, initialData]);

  const handleChange = (field) => (e) => {
    const value = field === 'corresponding' ? e.target.checked : e.target.value;
    setAuthor((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const { name, affiliation, country, email } = author;
    if (!name || !affiliation || !country || !email) {
      setError('All fields are required');
      return;
    }
    onChange(author, editingIndex);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{editingIndex !== null ? 'Edit Author' : 'Add Author'}</DialogTitle>
      <DialogContent sx={{ backgroundColor: '#fafafa', pb: 1 }}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Author Name"
              value={author.name}
              onChange={handleChange('name')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              error={!!error && !author.name}
              helperText={!!error && !author.name && 'Required'}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Affiliation"
              value={author.affiliation}
              onChange={handleChange('affiliation')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
              error={!!error && !author.affiliation}
              helperText={!!error && !author.affiliation && 'Required'}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              value={author.country}
              onChange={handleChange('country')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PublicIcon />
                  </InputAdornment>
                ),
              }}
              error={!!error && !author.country}
              helperText={!!error && !author.country && 'Required'}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={author.email}
              onChange={handleChange('email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              error={!!error && !author.email}
              helperText={!!error && !author.email && 'Required'}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={author.corresponding}
                  onChange={handleChange('corresponding')}
                  color="primary"
                />
              }
              label="Corresponding Author"
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color="error" fontSize="0.9rem">
                {error}
              </Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="error" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthorDialog;
