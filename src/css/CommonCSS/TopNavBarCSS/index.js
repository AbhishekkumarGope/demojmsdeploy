const TopNavBarCSS = (theme) => ({
  AppBar: {
    position: 'fixed',
    backgroundColor: theme.components?.palette?.primary?.main || theme.palette.primary.main,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  ToolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 64,
    px: 2,
  },
  logoBox: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1,
  },
  logoText: {
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '1.8rem',
  },
  subText: {
    lineHeight: 1,
    color: theme.palette.grey[300],
    fontSize: '0.7rem',
    ml: 0.3,
    mt: '-4px',
  },
});

export default TopNavBarCSS;
