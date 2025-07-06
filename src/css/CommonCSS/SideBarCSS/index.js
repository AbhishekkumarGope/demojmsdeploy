const drawerWidth = 240;
const topNavHeight = 64;

const SideBarCSS = (theme) => ({
  main: {
    width: drawerWidth,
    bgcolor: '#f5f5f5',
    borderRight: '1px solid #ddd',
    height: `calc(100vh - ${topNavHeight}px)`,
    position: 'fixed',
    top: `${topNavHeight}px`,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // No scroll
  },
  topList: {
    flexGrow: 1, // Pushes bottomList down
    overflow: 'hidden',
  },
  bottomList: {
    borderTop: '1px solid #ccc',
  },
  listItem: (isActive) => ({
    bgcolor: isActive ? theme.palette.primary.main : 'transparent',
    color: isActive ? 'white' : 'inherit',
    '& .MuiListItemIcon-root': {
      color: isActive ? 'white' : 'inherit',
    },
    '&:hover': {
      bgcolor: theme.palette.primary.main,
      color: 'white',
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  }),
  listIcon: (isActive) => ({
    color: isActive ? 'white' : 'inherit',
  }),
});

export default SideBarCSS;
