import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  Link,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LoginCSS from '../../../../css/AuthorViews/LandingCSS/LoginCSS';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const styles = LoginCSS(theme);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
    // TODO: Add actual login logic here
    navigate('/author/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={styles.main}>
      <Paper elevation={3} sx={styles.paper}>
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          Login to Your Account
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={styles.form}>
          <TextField
            fullWidth
            label="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            sx={styles.button}
          >
            Login
          </Button>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don&apos;t have an account?{' '}
            <Link component="button" onClick={() => navigate('/signup')}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
