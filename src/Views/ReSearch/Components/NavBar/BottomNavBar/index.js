import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SearchIcon from '@mui/icons-material/Search';

function Artical() {
  return (
    <Box>
      <Typography sx={{ marginTop: 2 }}>
        Articles & Issues <KeyboardArrowDownIcon fontSize="small" />
      </Typography>
    </Box>
  );
}

function About() {
  return (
    <Box>
      <Typography sx={{ marginTop: 2 }}>
        About <KeyboardArrowDownIcon />
      </Typography>
    </Box>
  );
}

function Publish() {
  return (
    <Box>
      <Typography sx={{ marginTop: 2 }}>
        Publish <KeyboardArrowDownIcon fontSize="small" />
      </Typography>
    </Box>
  );
}

function Order() {
  return (
    <Box sx={{ borderRight: '1px solid #ccc', pr: 2 }}>
      <Typography sx={{ marginTop: 2 }}>
        Order Journal <CallMadeIcon sx={{ fontSize: "small" }} />
      </Typography>
    </Box>
  );
}

function Searchin() {
  return (
    <Box sx={{ borderRight: '1px solid #ccc', pr: 10 }}>
      <Typography sx={{ marginTop: 2 }}>
        <SearchIcon sx={{ marginRight: 2, fontSize: "medium" }} />
        Search in this Journal
      </Typography>
    </Box>
  );
}

function Submit() {
  return (
    <Box sx={{ borderRight: '1px solid #ccc', pr: 10 }}>
      <Typography sx={{ marginTop: 2 }}>
        Submit your article <CallMadeIcon sx={{ fontSize: "small" }} />
      </Typography>
    </Box>
  );
}

function Guide() {
  return (
    <Box sx={{ borderRight: '1px solid #ccc', pr: 10 }}>
      <Typography sx={{ marginTop: 2 }}>
        Guide for authors
      </Typography>
    </Box>
  );
}

// Combine all in one layout component
function BottomNavBar() {
  return (
    <Box sx={{ display: 'flex', gap: 5, marginLeft: 15, height: 50 }}>
      <Artical />
      <About />
      <Publish />
      <Order />
      <Searchin />
      <Submit />
      <Guide />
    </Box>
  );
}

export default BottomNavBar;
