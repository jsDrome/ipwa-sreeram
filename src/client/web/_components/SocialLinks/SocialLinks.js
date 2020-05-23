import React from 'react';
// import classnames from 'classnames';
import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FaHackerrank, FaNpm, FaQuora, FaGithubSquare, FaYoutube, FaMedium, FaKeybase, FaDev, FaJsfiddle, FaDocker } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillCode, AiFillCodeSandboxSquare } from 'react-icons/ai';
import { IoMdAppstore } from 'react-icons/io';
import { RiStackOverflowLine } from 'react-icons/ri';
import styles from './SocialLinks.styles';

const GITHUB_LINK = 'https://github.com/sreeramofficial/';
const STACKOVERFLOW_LINK = 'https://stackoverflow.com/users/5228328/sreeram-padmanabhan';
const NPM_LINK = 'https://www.npmjs.com/~sreerampr';
const LEETCODE_LINK = 'https://leetcode.com/sreeramofficial/';
const CODESANDBOX_LINK = 'https://codesandbox.io/u/sreeramofficial';
const HACKERRANK_LINK = 'https://www.hackerrank.com/sreeramofficial';
// const FREECODECAMP_LINK = 'https://www.freecodecamp.org/sreeram';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/sreeramofficial/';
const INSTAGRAM_LINK = 'https://instagram.com/sreeramofficial/';
const FACEBOOK_LINK = 'https://facebook.com/sreeramslife/';
const TWITTER_LINK = 'https://twitter.com/sreeramofficial/';
const YOUTUBE_LINK = 'https://www.youtube.com/user/thesreerampr';
// const REDDIT_LINK = 'https://www.reddit.com/user/sreeramofficial';
const QUORA_LINK = 'https://www.quora.com/profile/Sreeram-Padmanabhan-1';
const MEDIUM_LINK = 'https://medium.com/@sreeramofficial';
const KEYBASE_LINK = 'https://keybase.io/sreeram';
const PLAYSTORE_LINK = 'https://play.google.com/store/apps/developer?id=jsDrome&hl=en';
const DEV_LINK = 'https://dev.to/sreeram';
const JSFIDDLE_LINK = 'https://jsfiddle.net/sreeramofficial';
const DOCKERHUB_LINK = 'https://hub.docker.com/u/sreeram';

const SocialLinks = ({ classes }) => <div className={classes.social}>
  <Link className={classes.socialLink} href={GITHUB_LINK} target="_blank">
    <FaGithubSquare className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={STACKOVERFLOW_LINK} target="_blank">
    <RiStackOverflowLine className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={LEETCODE_LINK} target="_blank">
    <AiFillCode className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={HACKERRANK_LINK} target="_blank">
    <FaHackerrank className={classes.socialIcon} />
  </Link>
  {/* <Link className={classes.socialLink} href={FREECODECAMP_LINK} target="_blank">
    <FaFreeCodeCamp className={classes.socialIcon} />
  </Link> */}
  {/* <Link className={classes.socialLink} href={CODESANDBOX_LINK} target="_blank">
    <AiFillCodeSandboxSquare className={classes.socialIcon} />
  </Link> */}
  <Link className={classes.socialLink} href={LINKEDIN_LINK} target="_blank">
    <LinkedInIcon className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={INSTAGRAM_LINK} target="_blank">
    <TiSocialInstagram className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={FACEBOOK_LINK} target="_blank">
    <FacebookIcon className={classes.socialIcon} />
  </Link>
  {/* <Link className={classes.socialLink} href={YOUTUBE_LINK} target="_blank">
    <FaYoutube className={classes.socialIcon} />
  </Link> */}
  <Link className={classes.socialLink} href={TWITTER_LINK} target="_blank">
    <TwitterIcon className={classes.socialIcon} />
  </Link>
  {/* <Link className={classes.socialLink} href={REDDIT_LINK} target="_blank">
    <RedditLink className={classes.socialIcon} />
  </Link> */}
  <Link className={classes.socialLink} href={QUORA_LINK} target="_blank">
    <FaQuora className={classes.socialIcon} />
  </Link>
  {/* <Link className={classes.socialLink} href={MEDIUM_LINK} target="_blank">
    <FaMedium className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={NPM_LINK} target="_blank">
    <FaNpm className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={KEYBASE_LINK} target="_blank">
    <FaKeybase className={classes.socialIcon} />
  </Link>
  {/* <Link className={classes.socialLink} href={PLAYSTORE_LINK} target="_blank">
    <IoMdAppstore className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={DEV_LINK} target="_blank">
    <FaDev className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={JSFIDDLE_LINK} target="_blank">
    <FaJsfiddle className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={DOCKERHUB_LINK} target="_blank">
    <FaDocker className={classes.socialIcon} />
  </Link> */}

</div>;

export default withStyles(styles, { withTheme: true })(SocialLinks);
