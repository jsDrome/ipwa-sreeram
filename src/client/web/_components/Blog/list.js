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
    title: 'Web Engineer Interview preparation',
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
  {
    title: 'JS Fundamentals',
    route: '/post/tech/interview/js-fundamentals',
  },
  {
    title: 'Closures',
    route: '/post/tech/javascript/closures',
  },
  {
    title: 'Datastructures',
    route: '/post/tech/interview/datastructures',
  },
  {
    title: 'Linked List algorithms',
    route: '/post/tech/interview/linked-list-algorithms',
  },
  {
    title: 'Binary tree algorithms',
    route: '/post/tech/interview/bst-algorithms',
  },
  {
    title: 'Cracking the coding Interview',
    route: '/post/tech/interview/ctci',
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
  {
    title: 'Certifications',
    route: '/post/tech/interview/certifications',
  },
  {
    title: 'Open Source projects',
    route: '/post/tech/interview/open-source-projects',
  },
  {
    title: 'Business I setup',
    route: '/post/tech/interview/businesses',
  },
  {
    title: '1. Two sum',
    route: '/post/leetcode/easy/1',
  },
  {
    title: '2. Add Two Numbers',
    route: '/post/leetcode/medium/2',
  },
  {
    title: '9. Palindrome Number',
    route: '/post/leetcode/easy/9',
  },
  {
    title: '19. Remove Nth Node From End of List',
    route: '/post/leetcode/medium/19',
  },
  {
    title: '20. Valid Parentheses',
    route: '/post/leetcode/easy/20',
  },
  {
    title: '21. Merge Two Sorted Lists',
    route: '/post/leetcode/easy/21',
  },
  {
    title: '26. Remove Duplicates from Sorted Array',
    route: '/post/leetcode/easy/21',
  },
  {
    title: '36. Valid Sudoku',
    route: '/post/leetcode/medium/36',
  },
  {
    title: '53. Maximum Subarray',
    route: '/post/leetcode/medium/53',
  },
  {
    title: '56. Merge Intervals',
    route: '/post/leetcode/medium/56',
  },
  {
    title: '64. Minimum Path Sum',
    route: '/post/leetcode/medium/64',
  },
  {
    title: '67. Add Binary',
    route: '/post/leetcode/easy/67',
  },
  {
    title: '69. Sqrt(x)',
    route: '/post/leetcode/easy/69',
  },
  {
    title: '79. Word Search',
    route: '/post/leetcode/medium/79',
  },
  {
    title: '94. Binary Tree Inorder Traversal',
    route: '/post/leetcode/medium/94',
  },
  {
    title: '101. Symmetric Tree',
    route: '/post/leetcode/easy/101',
  },
  {
    title: '107. Binary Tree Level Order Traversal II',
    route: '/post/leetcode/easy/107',
  },
  {
    title: '124. Binary Tree Maximum Path Sum',
    route: '/post/leetcode/hard/124',
  },
  {
    title: '130. Surrounded Regions',
    route: '/post/leetcode/medium/130',
  },
  {
    title: '169. Majority Element',
    route: '/post/leetcode/medium/169',
  },
  {
    title: '199. Binary Tree Right Side View',
    route: '/post/leetcode/medium/199',
  },
  {
    title: '206. Reverse Linked List',
    route: '/post/leetcode/easy/206',
  },
  {
    title: '226. Invert Binary Tree',
    route: '/post/leetcode/easy/226',
  },
  {
    title: '230. Kth Smallest Element in a BST',
    route: '/post/leetcode/medium/230',
  },
  {
    title: '242. Valid Anagram',
    route: '/post/leetcode/easy/242',
  },
  {
    title: '304. Range Sum Query 2D - Immutable',
    route: '/post/leetcode/medium/304',
  },
  {
    title: '319. Bulb Switcher',
    route: '/post/leetcode/medium/319',
  },
  {
    title: '338. Counting Bits',
    route: '/post/leetcode/medium/338',
  },
  {
    title: '367. Valid Perfect Square',
    route: '/post/leetcode/easy/367',
  },
  {
    title: '448. Find All Numbers Disappeared in an Array',
    route: '/post/leetcode/easy/448',
  },
  {
    title: '520. Detect Capital',
    route: '/post/leetcode/easy/520',
  },
  {
    title: '530. Minimum Absolute Difference in BST',
    route: '/post/leetcode/easy/530',
  },
  {
    title: '543. Diameter of Binary Tree',
    route: '/post/leetcode/easy/543',
  },
  {
    title: '637. Average of Levels in Binary Tree',
    route: '/post/leetcode/easy/637',
  },
  {
    title: '653. Two Sum IV - Input is a BST',
    route: '/post/leetcode/easy/653',
  },
  {
    title: '671. Second Minimum Node In a Binary Tree',
    route: '/post/leetcode/easy/671',
  },
  {
    title: '680. Valid Palindrome II',
    route: '/post/leetcode/easy/680',
  },
  {
    title: '771. Jewels and Stones',
    route: '/post/leetcode/easy/771',
  },
  {
    title: '896. Monotonic Array',
    route: '/post/leetcode/easy/896',
  },
  {
    title: '938. Range Sum of BST',
    route: '/post/leetcode/easy/938',
  },
  {
    title: '953. Verifying an Alien Dictionary',
    route: '/post/leetcode/easy/953',
  },
  {
    title: '1004. Max Consecutive Ones III',
    route: '/post/leetcode/medium/1004',
  },
  {
    title: '1007. Minimum Domino Rotations For Equal Row',
    route: '/post/leetcode/medium/1007',
  },
  {
    title: '1008. Construct Binary Search Tree from Preorder Traversal',
    route: '/post/leetcode/medium/1008',
  },
  {
    title: '1108. Defanging an IP Address',
    route: '/post/leetcode/easy/1108',
  },
  {
    title: '1110. Delete Nodes And Return Forest',
    route: '/post/leetcode/medium/1110',
  },
  {
    title: '1239. Maximum Length of a Concatenated String with Unique Characters',
    route: '/post/leetcode/medium/1239',
  },
  {
    title: '1304. Find N Unique Integers Sum up to Zero',
    route: '/post/leetcode/easy/1304',
  },
  {
    title: '1351. Count Negative Numbers in a Matrix',
    route: '/post/leetcode/easy/1351',
  },
  {
    title: '1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree',
    route: '/post/leetcode/medium/1379',
  },
  {
    title: '1431. Kids With Greatest Number of Candies',
    route: '/post/leetcode/easy/1431',
  },
  {
    title: '1464. Maximum Product of Two Elements in an Array',
    route: '/post/leetcode/easy/1464',
  },
  {
    title: '1470. Shuffle the Array',
    route: '/post/leetcode/easy/1470',
  },
  {
    title: '1480. Running Sum of 1d Array',
    route: '/post/leetcode/easy/1480',
  },
  {
    title: '1486. XOR Operation in an Array',
    route: '/post/leetcode/easy/1486',
  },
  {
    title: '1502. Can Make Arithmetic Progression From Sequence',
    route: '/post/leetcode/easy/1502',
  },
  {
    title: '1512. Number of Good Pairs',
    route: '/post/leetcode/easy/1512',
  },
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
