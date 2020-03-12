const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl("https://medium.com/@sergiodn/why-infrastructure-as-code-is-lit-bf95e08a7d89").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
