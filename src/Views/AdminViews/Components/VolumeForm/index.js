import {TextField, Button, Typography, Box, useTheme} from '@mui/material';
import VolumeFormCSS from '../../../../css/AdminViews/ComponentsCSS/VolumeFormCSS';
const ArticleForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };
  const theme = useTheme();
  const styles = VolumeFormCSS(theme);

  return (
    <>
      <TextField
        fullWidth
        name="title"
        label="Title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="authors"
        label="Author List"
        value={formData.authors}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="doi"
        label="DOI"
        value={formData.doi}
        onChange={handleChange}
        margin="normal"
      />

      {/* Submission and Acceptance Dates Side-by-Side */}
      <Box sx={styles.dateContainer}>
        <TextField
          fullWidth
          name="submissionDate"
          label="Submission Date"
          type="date"
          value={formData.submissionDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          margin="normal"
          sx={{ flex: 1 }}
        />
        <TextField
          fullWidth
          name="acceptanceDate"
          label="Acceptance Date"
          type="date"
          value={formData.acceptanceDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          margin="normal"
          sx={{ flex: 1 }}
        />
      </Box>

      <TextField
        fullWidth
        name="abstract"
        label="Abstract"
        multiline
        rows={3}
        value={formData.abstract}
        onChange={handleChange}
        margin="normal"
      />

      {/* Keywords Field */}
      <TextField
        fullWidth
        name="keywords"
        label="Keywords"
        placeholder="e.g. AI, Machine Learning, NLP"
        value={formData.keywords}
        onChange={handleChange}
        margin="normal"
      />

      {/* File Upload */}
      <Button variant="outlined" component="label" sx={styles.fileUploadButton}>
        Upload File
        <input
          type="file"
          name="file"
          hidden
          onChange={handleChange}
        />
      </Button>
      {formData.file && (
        <Typography variant="body2" sx={styles.fileUpload}>
          Selected: {formData.file.name}
        </Typography>
      )}
    </>
  );
};

export default ArticleForm;
