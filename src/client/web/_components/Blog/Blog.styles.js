export default theme => ({
  content: {
    maxWidth: 900,
    margin: 'auto',
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      maxHeight: 'calc(100% - 90px)',
    },
    maxHeight: 'calc(100% - 70px)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    paddingBottom: 0,
  },
  copyRightInfo: {
    textAlign: 'center',
  },
  payButton: {
    display: 'block',
    margin: 'auto',
    // marginBottom: 15,
    width: 'fit-content',
  },
  stickyFooter: {
    background: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1),rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))',
    position: 'sticky',
    bottom: 0,
    paddingTop: 50,
    paddingBottom: 15,
  },
});
