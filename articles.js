const Parser = require('rss-parser');

async function getArticlesFromRss() {
  let parser = new Parser({
    customFields: {
      item: [['media:content', 'mediaContent', {keepArray: false}],]
    }
  });
  let articles = [];
  let feed = await parser.parseURL('https://www.di.se/rss');

  feed.items.forEach(item => {
    articles.push({...item});
  });

  return articles.slice(0, 10);
}

async function listArticles(req, res) {
  const articles = await getArticlesFromRss();
  res.render('articles', {articles});
}

module.exports = [listArticles];
