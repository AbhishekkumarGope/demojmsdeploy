import React, { useState } from 'react';
import HouseIcon from '@mui/icons-material/House';
import {
  Box,
  Typography,
  TextField,
  Divider,
  Link,
  Button,
  
} from '@mui/material';



function Signup(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setConformPassword] = useState('');
  const handelSignup = (e) => {
    e.preventDefault();
  }
  
  //console.log('Signup Data:', { name, email, password,conformpassword });
    return(
        <Box>
        <Box justifyContent="space-between" ml={30} pt={5} width={800}>
        <Typography variant="body1" gutterBottom >
         <HouseIcon /> REGISTER
        </Typography>
        <Divider sx={{ mb: 2 }} />
        </Box>
    <Box className="login-container"  justifyContent="space-between" ml={50} pt={0} >
      {/* Login Form */}
      <Box className="login" width="400px" >
        <Typography variant="h5" gutterBottom textAlign="center">
          Register
        </Typography>
        <Box component="form" onSubmit={handelSignup}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Username "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            label="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            label="Repeat password"
            required 
            value={conformpassword}
            onChange={(e) => setConformPassword(e.target.value)}
          />
         
          <Button type="signup" variant="contained" fullWidth
          >
            Signup
          </Button>
            <Typography variant="body2"  textAlign="center" mt={2}>
             Already have an account?{' '}
            <Link  underline="hover" >
                Login
            </Link>
            </Typography>
            <Typography variant='body2'>
                Hint: The password should be at least eight characters login
                to make it strong use upper and lower case letters number
                and symbals like ! * ? $ % ^ &
            </Typography>
          
          
        </Box>
      </Box>
    </Box>
    </Box>

    )
} export default Signup;