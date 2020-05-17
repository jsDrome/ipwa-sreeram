export default theme => ({
  homeLayout: {
    background: theme.background.primary,
    height: '100vh',
  },
  homeLayoutContents: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.background.primary,
  },
  copyRightInfo: {
    textAlign: 'center',
  },
  payButton: {
    marginBottom: 15,
    width: 'fit-content',
  },
});
