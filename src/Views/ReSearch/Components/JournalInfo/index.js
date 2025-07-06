import { Box, Typography } from "@mui/material";

function JournalInfo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        padding: 4,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
      }}
    >
      {/* About the Journal Section */}
      <Box sx={{ width: { xs: '100%', md: 725 }, padding: 3, background: '#f5f5f5' }}>
        <Typography variant="h5">About the Journal</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Cognitive Systems Research is dedicated to the study of human-level cognition. As such, it welcomes papers which advance the understanding, design, and intelligent systems, both natural and artificial.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          The journal brings together a broad community studying cognition...
        </Typography>
        <Typography sx={{ color: '#00ddff', marginTop: 3 }}>
          View full aims & scope
        </Typography>
      </Box>

      {/* Article Publishing Option Section */}
      <Box sx={{ width: { xs: '100%', md: 470 }, padding: 3, background: '#ffffff' }}>
        <Typography variant="h5">Article Publishing Option</Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Open Access
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Article Publishing Charge (APC): USD 3,030 (excluding taxes). The amount you pay may be reduced during submission if applicable.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Review{' '}
          <Typography component="span" sx={{ color: '#00ddff' }}>
            this journal's open access policy
          </Typography>
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Subscription
        </Typography>
        <Typography sx={{ mt: 1 }}>
          No publication fee charged and published articles are immediately available to subscribers.
        </Typography>
      </Box>
    </Box>
  );
}

export default JournalInfo;
