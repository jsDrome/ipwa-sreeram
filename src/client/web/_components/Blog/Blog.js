import React from "react";
import { Adsense, Content } from "@jsdrome/components";

import Markdown from "../Markdown/Markdown";
import Navigation from "../Navigation/Navigation";

import { getLinks } from './list';

const Blog = ({ match }) => {
  /* eslint-disable global-require */
  const { params: { folder = 'home', subfolder = 'home', post = 'home' } } = match;
  const content = require(`./posts/${folder}/${subfolder}/${post}.md`).default;
  const navLinks = getLinks(folder, subfolder, post);

  return <div>
    <Content>
      <Markdown>
        {content}
      </Markdown>
      <Navigation links={navLinks} />
      <Adsense
        adFormat="fluid"
        adClient="ca-pub-6831276331714408"
        adSlot="8343723799"
        layoutKey="-h4-l+d-4g+dw" />
    </Content>
  </div>
};

export default Blog;
