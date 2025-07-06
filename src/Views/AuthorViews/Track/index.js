import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Chip,
  useTheme,
} from '@mui/material';
import TrackCSS from '../../../css/AuthorViews/TrackCSS';

const TrackMainContent = ({ submissions = [] }) => {  // Default value of empty array
  const theme = useTheme();
  const styles = TrackCSS(theme);

  const statusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'warning';
      case 'Accepted':
        return 'success';
      case 'Rejected':
        return 'error';
      case 'Submitted':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box component="main" sx={styles.main}>
      <Paper sx={styles.paper}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          My Submissions
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={styles.tableRow}>
                <TableCell sx={styles.tableCell}><strong>Title</strong></TableCell>
                <TableCell sx={styles.tableCell}><strong>Author</strong></TableCell>
                <TableCell sx={styles.tableCell}><strong>Submission Date</strong></TableCell>
                <TableCell sx={styles.tableCell}><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.title}</TableCell>
                  <TableCell>{submission.date}</TableCell>
                  <TableCell>
                    <Chip label={submission.status} color={statusColor(submission.status)} />
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

export default TrackMainContent;
