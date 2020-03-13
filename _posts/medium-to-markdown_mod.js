const mediumToMarkdown = require('medium-to-markdown');

mediumToMarkdown.convertFromUrl("https://medium.com/@sergiodn/am-i-designing-a-safe-password-storage-3ac9691cd927").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
