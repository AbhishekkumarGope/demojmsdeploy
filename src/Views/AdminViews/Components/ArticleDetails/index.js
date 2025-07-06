import {
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
  Paper,
} from "@mui/material";

const ArticleDetails = () => {
  return (
    <Box p={4} maxWidth="800px" mx="auto">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        The Role of Vitamin D in Fertility and during Pregnancy and Lactation: A Review of Clinical Data
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        <strong>Authors:</strong> Pilz S, Zittermann A, Obed R, Hahn A, Pludowski P, Trummer H.
      </Typography>

      <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />} mb={2}>
        <Typography variant="body2" color="text.secondary">
          <strong>Publication Date:</strong> October 12, 2018
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Type:</strong> Handbooks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>DOI:</strong> 10.1016/j.hc.2018.05.008
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Publication On:</strong> Heart Fail Clin.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Volume/Issue:</strong> 14(3)
        </Typography>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Abstract
        </Typography>
        <Typography variant="body2" color="text.primary">
          Within the last years, exercise training and rehabilitation as add-on to medical treatment has become an emerging field in pulmonary hypertension. Owing to the beneficial effects of exercise training in pulmonary hypertension, the European Respiratory Society/European Society of Cardiology guidelines for pulmonary hypertension recommend a supervised and closely monitored exercise and respiratory training/rehabilitation as an add-on to medical therapy (class IIa, level of evidence B). In this article, different training modalities, effects of exercise training, possible pathobiological mechanisms of action, and future research questions are discussed.
        </Typography>
      </Paper>

      <Box mt={3}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Keywords:
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {[
            "Exercise training",
            "Pulmonary arterial hypertension",
            "Pulmonary hypertension",
            "Rehabilitation",
            "Training effects",
          ].map((keyword) => (
            <Chip key={keyword} label={keyword} variant="outlined" />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ArticleDetails;
