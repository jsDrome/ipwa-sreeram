export default theme => ({
  root: {
    borderTop: `solid 1px #e9ebee`,
    // [theme.breakpoints.up('md')]: {
    //   marginTop: -15,
    // },
  },
  nestedListItem: {
    padding: 2,
    paddingLeft: 15,
  },
  activeListItem: {
    padding: 2,
    paddingLeft: 15,
    borderLeft: `solid 5px`,
    background: theme.background.primary,
  },
});
