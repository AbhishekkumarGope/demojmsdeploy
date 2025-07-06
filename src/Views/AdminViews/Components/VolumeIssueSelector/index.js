import React, { useState } from 'react';
import {
  Box, FormControl, InputLabel, MenuItem, Select, Dialog,
  TextField, Typography, Button, IconButton
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const VolumeIssueSelector = ({ formData, setFormData }) => {
  const [volumes, setVolumes] = useState(['V1', 'V2']);
  const [issues, setIssues] = useState(['I1', 'I2']);
  const [open, setOpen] = useState({ type: '', show: false });
  const [tempInput, setTempInput] = useState('');

  const [confirmDelete, setConfirmDelete] = useState({ open: false, type: '', value: '' });

  const handleAdd = () => {
    if (!tempInput.trim()) return;
    const updated = open.type === 'volume' ? [...volumes, tempInput] : [...issues, tempInput];
    if (open.type === 'volume') {
      setVolumes(updated);
      setFormData({ ...formData, volume: tempInput });
    } else {
      setIssues(updated);
      setFormData({ ...formData, issue: tempInput });
    }
    setTempInput('');
    setOpen({ type: '', show: false });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmDeleteOpen = (type, value) => {
    setConfirmDelete({ open: true, type, value });
  };

  const handleDeleteConfirmed = () => {
    const { type, value } = confirmDelete;
    if (type === 'volume') {
      setVolumes(volumes.filter((v) => v !== value));
      if (formData.volume === value) {
        setFormData({ ...formData, volume: '' });
      }
    } else {
      setIssues(issues.filter((i) => i !== value));
      if (formData.issue === value) {
        setFormData({ ...formData, issue: '' });
      }
    }
    setConfirmDelete({ open: false, type: '', value: '' });
  };

  const renderOption = (type, value) => (
    <MenuItem key={value} value={value}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Typography variant="body2">{value}</Typography>
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            confirmDeleteOpen(type, value);
          }}
          sx={{ color: 'error.main', ml: 1 }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      </Box>
    </MenuItem>
  );

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Volume</InputLabel>
          <Select
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            label="Volume"
          >
            {volumes.map((v) => renderOption('volume', v))}
            <MenuItem onClick={() => setOpen({ type: 'volume', show: true })}>
              + Add Volume
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Issue</InputLabel>
          <Select
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            label="Issue"
          >
            {issues.map((i) => renderOption('issue', i))}
            <MenuItem onClick={() => setOpen({ type: 'issue', show: true })}>
              + Add Issue
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Add Volume/Issue Dialog */}
      <Dialog
        open={open.show}
        onClose={() => setOpen({ type: '', show: false })}
        maxWidth="sm"
        fullWidth
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {open.type === 'volume' ? 'Type Volume' : 'Type Issue'}
          </Typography>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={tempInput}
            onChange={(e) => setTempInput(e.target.value)}
            placeholder={open.type === 'volume' ? 'Volume' : 'Issue'}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Box>
      </Dialog>

      {/* Confirm Delete Dialog */}
      <Dialog
        open={confirmDelete.open}
        onClose={() => setConfirmDelete({ open: false, type: '', value: '' })}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Are you sure you want to delete "{confirmDelete.value}"?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setConfirmDelete({ open: false, type: '', value: '' })}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteConfirmed}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default VolumeIssueSelector;
