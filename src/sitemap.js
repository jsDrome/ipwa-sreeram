const fs = require('fs');
const { list } = require('./client/web/_components/Blog/list');

let sitemap = 'https://sreer.am/\n';

// eslint-disable-next-line no-magic-numbers
list.slice(1).forEach(item => sitemap += 'https://sreer.am' + item.route + '\n');

fs.writeFileSync('dist/sitemap.txt', sitemap);
