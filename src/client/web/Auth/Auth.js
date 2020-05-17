import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import get from 'lodash/get';
import {
  Navbar,
  Toolbar,
  Sidebar,
} from '@jsdrome/components';

import SocialLinks from '../_components/SocialLinks/SocialLinks';
import Copyright from '../_components/Copyright/Copyright';

import styles from './Auth.styles';

const NormalLayout = ({ classes, children, sidebarContent }) => {
  const [ isSidebarOpen, setSidebarOpen ] = useState(false);

  return <div className={classes.normalLayout}>
    <Navbar
      isUserLoggedIn={get(window._ipwa, 'isUserLoggedIn')}
      onMenuButtonClick={() => setSidebarOpen(true)} />
    <Toolbar />
    <div className={classes.normalLayoutContents}>
      {children}
      <SocialLinks />
      <Copyright />
    </div>
    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
      {sidebarContent}
    </Sidebar>
  </div>;
}

export default withStyles(styles)(NormalLayout);
