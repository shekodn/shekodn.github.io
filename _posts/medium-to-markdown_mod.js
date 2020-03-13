const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl("https://medium.com/@sergiodn/the-oauth-2-0-waltz-957879e5316d").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
