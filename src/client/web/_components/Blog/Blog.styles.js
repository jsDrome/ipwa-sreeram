export default theme => ({
  content: {
    maxWidth: 900,
    margin: 'auto',
    padding: '15px 10px',
    [theme.breakpoints.up('md')]: {
      padding: 20,
    },
  },
  paper: {
    // [theme.breakpoints.up('md')]: {
    //   maxHeight: 'calc(150% - 90px)',
    // },
    // maxHeight: 'calc(150% - 70px)',
    // overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //   display: 'none',
    // },
    padding: 15,
    [theme.breakpoints.up('md')]: {
      padding: 20,
    },
  },
  copyRightInfo: {
    textAlign: 'center',
  },
  payButton: {
    display: 'block',
    margin: 'auto',
    width: 'fit-content',
    marginBottom: 15,
    [theme.breakpoints.up('md')]: {
      marginBottom: 20,
    },
  },
  footer: {
    // background: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1),rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))',
    // paddingTop: 50,
    // paddingBottom: 15,
    padding: 5,
    [theme.breakpoints.up('md')]: {
      padding: 10,
    },
  },
});
