import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import get from 'lodash/get';

import {
  Navbar,
  Toolbar,
  Modal,
  Sidebar,
} from '@jsdrome/components';

import Register from '../Register/Register';
import SocialLinks from '../_components/SocialLinks/SocialLinks';
import Copyright from '../_components/Copyright/Copyright';
import Blog from '../_components/Blog/Blog';
import SidebarContent from '../_components/SidebarContent/SidebarContent';

import styles from './Home.styles';

const MODAL_TYPES = {
  REGISTER: 'Login / Register',
};

const modalContent = type => {
  switch (type) {
  case MODAL_TYPES.REGISTER:
    return <Register />;
  default:
    return null;
  }
};

const HomeLayout = ({ classes, match }) => {
  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ isSidebarOpen, setSidebarOpen ] = useState(false);

  const appBarProps = {
    elevation: 2,
  };

  return <div className={classes.homeLayout}>
    <Modal
      isModalOpen={isModalOpen}
      title={isModalOpen || ''}
      handleModalClose={() => setModalOpen(false)}>
      {modalContent(isModalOpen)}
    </Modal>
    <Navbar
      title="Sreeram Padmanabhan"
      description="Web of thoughts"
      isUserLoggedIn={get(window._ipwa, 'isUserLoggedIn')}
      onRegisterClick={() => false}
      onMenuButtonClick={() => setSidebarOpen(true)}
      appBarProps={appBarProps}/>
    <Toolbar />
    <div className={classes.homeLayoutContents}>
      <Blog match={match} />
      <SocialLinks />
      <Button className={classes.payButton} href="/pay" variant="contained" color="primary">Buy me a coffee</Button>
      <Copyright title="sreeram.app" />
    </div>
    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} title={"Sreeram"}>
      <SidebarContent onSelect={() => setSidebarOpen(false)} />
    </Sidebar>
  </div>;
}

export default withStyles(styles)(HomeLayout);
