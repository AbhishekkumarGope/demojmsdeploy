import React from 'react';
import { Box, Grid, Typography, TextField, IconButton, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const footerLinks = {
  "News & Insights": [
    "All Insights",
    "Blog",
    "Featured Stories",
    "Publications",
    "Digitalizing Healthcare"
  ],
  "Events & Training": [
    "All Events and training",
    "Seminars",
    "Conferences",
    "Webinars",
    "Training & workshops"
  ],
  "About Us": [
    "Our history",
    "Leadership team",
    "Contact us",
    "Careers",
    "Locations"
  ]
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f9ff', px: 4, py: 6, mt: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {Object.entries(footerLinks).map(([section, items]) => (
          <Grid item xs={12} sm={6} md={3} key={section} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {section.toUpperCase()}
            </Typography>
            {items.map((item, idx) => (
              <Typography key={idx} variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                <Link href="#" underline="hover" color="inherit">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}

        {/* Newsletter Section */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            NEWSLETTER
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Keep up on new methods and EPA/FDA news. Enter your email and subscribe to our newsletter.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '1px solid #ccc',
              maxWidth: 300,
              mx: 'auto'
            }}
          >
            <TextField
              placeholder="Your email"
              variant="standard"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{ fontSize: '14px' }}
            />
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
