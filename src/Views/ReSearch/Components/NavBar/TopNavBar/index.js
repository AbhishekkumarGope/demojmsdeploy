import { Box, Typography, Button } from "@mui/material";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TopNavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', gap: 3, ml: 15, mt: 2, height: 50, alignItems: 'center' }}>
      <Typography>Journal</Typography>

      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <IoIosHelpCircleOutline style={{ marginRight: 4 }} />
        Help
      </Typography>

      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <IoSearch style={{ marginRight: 4 }} />
        Search
      </Typography>

      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <RiAccountBoxLine style={{ marginRight: 4 }} />
        My Account
      </Typography>

      <Button
        variant="text"
        onClick={() => navigate('/login')}
        sx={{ display: 'flex', alignItems: 'center', color: 'black' }}
      >
        <MdOutlineAccountBalance style={{ marginRight: 4 }} />
        <strong>Sign In</strong>
      </Button>
    </Box>
  );
}

export default TopNavBar;
