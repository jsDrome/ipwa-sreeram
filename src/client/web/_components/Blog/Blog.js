import React from "react";
import { Button } from '@material-ui/core';
import { Content } from "@jsdrome/components";
import { withStyles } from '@material-ui/core/styles';

import Markdown from "../Markdown/Markdown";
import Navigation from "../Navigation/Navigation";
import SocialLinks from '../SocialLinks/SocialLinks';
// import Copyright from '../Copyright/Copyright';

import { getLinks } from './list';
import styles from './Blog.styles';

const Blog = ({ classes, match }) => {
  /* eslint-disable global-require */
  const { params: { folder = 'home', subfolder = 'home', post = 'home' } } = match;
  const content = require(`./posts/${folder}/${subfolder}/${post}.md`).default;
  const navLinks = getLinks(folder, subfolder, post);

  return <div className="Blog">
    <Content className={classes.content} paperClassName={classes.paper}>
      <Markdown>
        {content}
      </Markdown>
      <Button className={classes.payButton} href="/pay" variant="contained" color="primary">☕ Buy me a coffee maybe?</Button>
      <div className={classes.stickyFooter}>
        <Navigation links={navLinks} />
        <SocialLinks />
        {/* <Copyright title="sreeram.app" /> */}
      </div>
      {/* <Adsense
        adFormat="fluid"
        adClient="ca-pub-6831276331714408"
        adSlot="8343723799"
        layoutKey="-h4-l+d-4g+dw" /> */}
    </Content>
  </div>
};

export default withStyles(styles)(Blog);
