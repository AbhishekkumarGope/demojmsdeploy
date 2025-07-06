import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Button,
  IconButton,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SubmissionCSS from '../../../css/AdminViews/SubmissionCSS';

const Submissions = () => {
  const theme = useTheme();
  const styles = SubmissionCSS(theme);
  const navigate = useNavigate();

  const initialSubmissions = [
    { id: 1, title: 'Name of Article 1', date: '02-Nov-2025', status: 'Submitted', authors: 'Alice, Bob', file: 'article1.pdf' },
    { id: 2, title: 'Name of Article 2', date: '03-Nov-2025', status: 'Accepted', authors: 'Carol, Dave', file: 'article2.pdf' },
    { id: 3, title: 'Name of Article 3', date: '04-Nov-2025', status: 'Rejected', authors: 'Eve, Frank', file: 'article3.pdf' },
  ];

  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [editedStatuses, setEditedStatuses] = useState({});

  const handleStatusChange = (id, newStatus) => {
    setSubmissions(prev =>
      prev.map(sub => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );

    const original = initialSubmissions.find(sub => sub.id === id);
    if (original && original.status !== newStatus) {
      setEditedStatuses(prev => ({ ...prev, [id]: true }));
    } else {
      setEditedStatuses(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  const handleSave = (id) => {
    console.log(`Saved submission with ID ${id}`);
    setEditedStatuses(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <Box sx={styles.main}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Submissions
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={styles.TableRow}>
              <TableCell sx={styles.tableCell1}><strong>Title</strong></TableCell>
              <TableCell sx={styles.tableCell1}><strong>Submission Date</strong></TableCell>
              <TableCell sx={styles.tableCell2}><strong>Status</strong></TableCell>
              <TableCell sx={styles.tableCell2}><strong>View</strong></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submissions.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell sx={styles.alignCenter}>
                  <Select
                    value={row.status}
                    size="small"
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
                    sx={styles.tableCellSelect}
                  >
                    <MenuItem value="Submitted">Submitted</MenuItem>
                    <MenuItem value="Reviewer Assigned">Reviewer Assigned</MenuItem>
                    <MenuItem value="Under Review">Under Review</MenuItem>
                    <MenuItem value="Accepted">Accepted</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                  </Select>
                </TableCell>
                <TableCell sx={styles.alignCenter}>
                  <IconButton
                    onClick={() => navigate(`submission/${row.id}`, { state: { submission: row } })}
                    size="small"
                    aria-label={`View submission ${row.title}`}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleSave(row.id)}
                    disabled={!editedStatuses[row.id]}
                  >
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Submissions;
