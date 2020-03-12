const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl("https://medium.com/insiden26/what-it-was-like-to-join-n26-abad7b072e25").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
