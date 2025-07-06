import {
  Box,
  Card,
  Typography,
  Button,
  IconButton,
  useTheme
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import SUbmissionViewCSS from '../../../../css/AdminViews/ComponentsCSS/SubmissionViewCSS';

const SubmissionView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const submission = state?.submission;
  const theme = useTheme();
  const styles = SUbmissionViewCSS(theme);

  if (!submission) {
    return (
      <Box sx={styles.noSubmissionMain}>
        <Typography variant="h6">No submission data found.</Typography>
        <Button variant="contained" onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={styles.main}>
      <Card sx={styles.card}>
        <Typography variant="h5" gutterBottom>{submission.title}</Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Author List:</strong> {submission.authors}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Submission Date:</strong> {submission.date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Abstract:</strong> {submission.abstract}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Keywords:</strong> {submission.keywords}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
          <Typography variant="body1">
            <strong>File:</strong> {submission.file?.name || submission.file}
          </Typography>
          {submission.file && (
            <IconButton
              color="primary"
              component="a"
              href={submission.fileUrl || submission.file}
              target="_blank"
              download
              aria-label="Download File"
            >
              <DownloadIcon />
            </IconButton>
          )}
        </Box>

        <Typography variant="body1" gutterBottom>
          <strong>Status:</strong> {submission.status}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Card>
    </Box>
  );
};

export default SubmissionView;
