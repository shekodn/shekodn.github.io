const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl("https://medium.com/@sergiodn/how-i-went-from-localhost-to-production-using-the-devops-way-part-1-of-n-7a7b4c35515f").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
