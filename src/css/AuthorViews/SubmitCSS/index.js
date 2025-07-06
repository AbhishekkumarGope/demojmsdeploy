const SubmitCSS = (theme) => ({
  main: {
    flexGrow: 1,
    p: 3,
    mt: 8,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    p: 4,
    width: '100%',
    maxWidth: 800,
    borderRadius: 3,
    boxShadow: theme.shadows[4],
    backgroundColor: theme.palette.background.paper,
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 'bold',
    mb: 1,
  },
  fileInfo: {
    mt: 1,
    fontStyle: 'italic',
  },
});
export default SubmitCSS;
