import { Box, Typography, Divider } from '@mui/material';

const volumes = ['88', '87', '86', '85', '84', '83'];
const months = ['December', 'September', 'August', 'June', 'March', 'January'];

const IssuesPanel = () => (
  <Box sx={{ width: 350, ml: 2 }}>
    <Typography variant='h5'>All issues</Typography>
    <Typography variant='body2' sx={{ mt: 3 }}>
      Incorporating{' '}
      <Typography component='span' variant='body2' sx={{ color: '#00ddff' }}>
        Biologically Inspired Cognitive Architectures
      </Typography>
    </Typography>
    <Divider sx={{ mt: 3, width: 250 }} />
    <Typography sx={{ py: 2 }}>2025 - Volumes 89-91</Typography>
    <Divider sx={{ width: 250 }} />
    <Typography sx={{ mt: 3 }}>2024 - Volumes 83-88</Typography>
    {volumes.map((vol, index) => (
      <Box key={vol}>
        <Typography sx={{ color: '#00ddff', mt: 3 }}>Volume {vol}</Typography>
        <Typography>{months[index]} 2024</Typography>
      </Box>
    ))}
    <Divider sx={{ mt: 3, width: 250 }} />
    <Typography sx={{ py: 2 }}>2023 - Volumes 77-82</Typography>
    <Divider sx={{ width: 250 }} />
  </Box>
);

export default IssuesPanel;
