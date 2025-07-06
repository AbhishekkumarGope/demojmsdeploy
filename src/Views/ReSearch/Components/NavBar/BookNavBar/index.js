import { Box, Typography, Divider } from '@mui/material';
import res from '../../../research.jpg';

const BookNavBar = () => (
  <Box sx={{ background: '#32C0FE', height: 200, display: 'flex', alignItems: 'center', px: 15 }}>
    <img src={res} alt='research book' style={{ height: 160 }} />
    <Box sx={{ ml: 3 }}>
      <Typography variant='h5'>Cognitive Systems Research</Typography>
      <Typography variant='body1'>Support Open Access</Typography>
    </Box>
    <Box sx={{ display: 'flex', ml: 10 }}>
      <Box sx={{ textAlign: 'center', mr: 2 }}>
        <Typography>9.8</Typography>
        <Typography>CiteScore</Typography>
      </Box>
      <Divider orientation='vertical' flexItem sx={{ bgcolor: 'black' }} />
      <Box sx={{ textAlign: 'center', ml: 2 }}>
        <Typography>2.1</Typography>
        <Typography>Impact Factor</Typography>
      </Box>
    </Box>
  </Box>
);

export default BookNavBar;
