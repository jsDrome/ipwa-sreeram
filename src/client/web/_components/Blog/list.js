const list = [
  {
    title: 'Home',
    route: '/post/home/home/home',
  },
  {
    title: 'My professional life so far',
    route: '/post/personal/life/my-professional-life',
  },
  {
    title: 'The topsy-turve of a decade I had',
    route: '/post/personal/life/topsy-turvy-decade',
  },
  {
    title: 'The best investment advice',
    route: '/post/personal/life/best-investment-advice',
  },
  {
    title: 'First day at work in Germany',
    route: '/post/personal/life/first-day-at-work-in-germany',
  },
  {
    title: 'Choosing Germany over India & UK',
    route: '/post/personal/life/in-uk-de',
  },
  {
    title: 'How are Indians treated in Britain?',
    route: '/post/personal/life/indians-in-britain',
  },
  {
    title: 'My solo travel adventure',
    route: '/post/personal/life/solo-travel',
  },
  {
    title: 'Things to do post moving to the UK',
    route: '/post/personal/life/things-to-do-first-in-britain',
  },
  {
    title: 'How I found a job in Germany',
    route: '/post/personal/life/job-in-berlin',
  },
  {
    title: 'Moving to Germany from India',
    route: '/post/personal/life/moving-to-germany',
  },
  {
    title: 'Things to do post moving to Germany',
    route: '/post/personal/life/things-to-do-first-in-germany',
  },
  {
    title: 'Things I tell my students',
    route: '/post/personal/life/things-i-tell-my-students',
  },
  {
    title: 'Getting a web developer job',
    route: '/post/personal/career/web-developer-job',
  },
  {
    title: 'The best solo trip I made',
    route: '/post/personal/photos/best-solo-trip',
  },
  {
    title: 'View from my desk at work',
    route: '/post/personal/photos/view-from-desk',
  },
  {
    title: 'The best photo I\'ve ever taken',
    route: '/post/personal/photos/london-eye-photo',
  },
  {
    title: 'The view from my home',
    route: '/post/personal/photos/view-from-home',
  },
  {
    title: 'Coolest thing I\'ve seen from an Airplane',
    route: '/post/personal/photos/snow-capped-mountains',
  },
  {
    title: 'Carl Sagan - Pale Blue Dot',
    route: '/post/personal/inspirational/pale-blue-dot',
  },
  {
    title: 'Fortress of Solitude',
    route: '/post/personal/inspirational/fortress-of-solitude',
  },
  {
    title: 'The V monologue',
    route: '/post/personal/inspirational/the-v-monologue',
  },
  {
    title: 'Atticus Finch',
    route: '/post/personal/inspirational/atticus-finch',
  },
  {
    title: 'Carl Sagan - Edge of forever',
    route: '/post/personal/inspirational/edge-of-forever',
  },
  {
    title: 'Christopher Reeve',
    route: '/post/personal/inspirational/christopher-reeve',
  },
  {
    title: 'Zach Wahls speech in 2011',
    route: '/post/personal/inspirational/zach-wahls',
  },
  // {
  //   title: 'The confusing array methods',
  //   route: '/post/tech/javascript/confusing-array-methods',
  // },
  // {
  //   title: 'Functions & Constructors',
  //   route: '/post/tech/javascript/functions-contructors',
  // },
  // {
  //   title: 'The ZAxis Challenge',
  //   route: '/post/tech/apps/z-axis',
  // },
  {
    title: 'Frontend Interview preparation',
    route: '/post/tech/interview/preparation',
  },
  // {
  //   title: 'Features of Javascript',
  //   route: '/post/tech/javascript/javascript-features',
  // },
  // {
  //   title: 'Callback hell',
  //   route: '/post/tech/javascript/callback-hell',
  // },
  // {
  //   title: 'Promises',
  //   route: '/post/tech/javascript/promises',
  // },
  // {
  //   title: 'Async/Await',
  //   route: '/post/tech/javascript/async-await',
  // },
  // {
  //   title: 'Closures',
  //   route: '/post/tech/javascript/closures',
  // },
  {
    title: 'JS Fundamentals',
    route: '/post/tech/interview/js-fundamentals',
  },
  {
    title: 'Datastructures',
    route: '/post/tech/interview/datastructures',
  },
  {
    title: 'Algorithms',
    route: '/post/tech/interview/algorithms',
  },
  {
    title: 'Leetcode Problems',
    route: '/post/tech/interview/leetcode',
  },
  {
    title: 'Hackerrank Problems',
    route: '/post/tech/interview/hackerrank',
  },
  {
    title: 'Hackerearth Problems',
    route: '/post/tech/interview/hackerearth',
  },
  {
    title: 'InterviewBit Problems',
    route: '/post/tech/interview/interviewbit',
  },
  {
    title: 'InterviewCake Problems',
    route: '/post/tech/interview/interviewcake',
  },
  {
    title: 'Codility Problems',
    route: '/post/tech/interview/codility',
  },
  // {
  //   title: 'Certifications',
  //   route: '/post/tech/interview/certifications',
  // },
  // {
  //   title: 'Personal Projects',
  //   route: '/post/tech/interview/personal-projects',
  // },
  // {
  //   title: 'Business I setup',
  //   route: '/post/tech/interview/businesses',
  // },
];

const getLinks = (folder, subfolder, post) => {
  /* eslint-disable no-magic-numbers */
  const selectedPostIndex = list.findIndex(l => l.route === `/post/${folder}/${subfolder}/${post}`);
  return {
    prevLink: selectedPostIndex !== 0 ? selectedPostIndex === 1 ? '/' : list[selectedPostIndex - 1].route : null,
    prevTitle: selectedPostIndex !== 0 ? list[selectedPostIndex - 1].title : null,
    currentLink: list[selectedPostIndex].route,
    currentTitle: list[selectedPostIndex].title,
    nextLink: selectedPostIndex !== list.length - 1 ? list[selectedPostIndex + 1].route : null,
    nextTitle: selectedPostIndex !== list.length - 1 ? list[selectedPostIndex + 1].title : null,
  };
};

const getTitle = route => {
  const post = list.find(item => item.route === route);
  return post ? `Sreeram Padmanabhan - ${post.title} | Web of Thoughts` : 'Sreeram Padmanabhan | Web Engineer | Web of thoughts';
};

module.exports = {
  list,
  getLinks,
  getTitle,
};
