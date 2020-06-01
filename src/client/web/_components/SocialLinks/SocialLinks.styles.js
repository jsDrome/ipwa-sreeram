export default theme => ({
  social: {
    width: 'fit-content',
    margin: 'auto',
    padding: 0,
    // marginBottom: 15,
  },
  socialLink: {
    margin: 1,
    fontSize: 0,
  },
  socialIcon: {
    [theme.breakpoints.up('md')]: {
      height: 30,
      width: 30,
    },
    height: 30,
    width: 30,
  },
});
