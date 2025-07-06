import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SignUpCSS from '../../../../css/AuthorViews/LandingCSS/SignUpCSS';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    affiliation: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log(formData);
  };
  const theme = useTheme();
  const styles = SignUpCSS(theme);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={styles.form}>
      <Typography variant="h5" align="center" fontWeight="bold">
        Create an Account
      </Typography>

      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Affiliation"
        name="affiliation"
        value={formData.affiliation}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Email ID"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'}
        value={formData.confirmPassword}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
        Sign Up
      </Button>

      <Box textAlign="center" mt={1}>
        <Typography variant="body2">
          Already have an account?{' '}
          <Link component="button" onClick={() => navigate('/login')}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
