export default theme => ({
  content: {
    maxWidth: 900,
    margin: 'auto',
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      maxHeight: 'calc(100% - 170px)',
    },
    maxHeight: 'calc(100% - 150px)',
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
    marginBottom: 15,
    width: 'fit-content',
  },
  stickyFooter: {
    position: 'sticky',
    bottom: 0,
    background: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up('md')]: {
      paddingBottom: 25,
    },
  },
});
