import { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import AccountCSS  from '../../../../css/CommonCSS/AccountCSS'; // ✅ Named import

const AuthorAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('Abhishek Kumar');
  const [email, setEmail] = useState('abhi@gmail.com');
  const [country, setCountry] = useState('India');

  const theme = useTheme();
  const styles = AccountCSS(theme);

  return (
    <Box sx={styles.main}>
      <Card sx={styles.card}>
        {/* Edit Button at Top Right */}
        <IconButton onClick={() => setIsEditing((prev) => !prev)} sx={styles.iconButton}>
          <EditIcon />
        </IconButton>

        <Typography variant="h6" gutterBottom>
          My Account
        </Typography>

        <Box sx={styles.avatarContainer}>
          <Avatar sx={styles.avatar}>A</Avatar>
        </Box>

        <Typography variant="body2" fontWeight="bold">Name</Typography>
        {isEditing ? (
          <TextField
            fullWidth
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
        ) : (
          <Typography>{name}</Typography>
        )}

        <Typography variant="body2" fontWeight="bold">Email</Typography>
        {isEditing ? (
          <TextField
            fullWidth
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
        ) : (
          <Typography>{email}</Typography>
        )}

        <Typography variant="body2" fontWeight="bold">Country</Typography>
        {isEditing ? (
          <TextField
            fullWidth
            size="small"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            sx={{ mb: 2 }}
          />
        ) : (
          <Typography>{country}</Typography>
        )}

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" fontWeight="bold">Password</Typography>
          {isEditing ? (
            <Box sx={styles.PasswordTextfield}>
              <TextField
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                size="small"
                sx={{ mr: 1 }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword((s) => !s)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </Box>
          ) : (
            <Box sx={styles.PasswordTextfield}>
              <Typography sx={{ mr: 1 }}>
                {showPassword ? password : '••••••••'}
              </Typography>
              <IconButton onClick={() => setShowPassword((s) => !s)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
          )}
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => setIsEditing((e) => !e)}
        >
          {isEditing ? 'Save Changes' : 'Edit Details'}
        </Button>
      </Card>
    </Box>
  );
};

export default AuthorAccount;