const axios = require('axios');
const cherrio = require('cheerio');

(async () => {

  const res = await axios.get('http://www.acfun.cn/a/ac4126053');
  const html = res.data;

  const $ = cherrio.load(html);
  const articleContent = $('.article-content');

  const doms = $(articleContent).find('p > img, div');

  const content = [];

  doms.map((i, e) => {
    const text = $(e).text();
    if (text) {
      content.push(text);
    } else if (e.name == 'img') {
      console.log(e)
      const src = $(e).attr('src');
      content.push(src);
    }
  })

  console.log(content)


})().then(r => {
  process.exit(0)
  console.log(process)
}).catch(e => {
  console.log(e)
  process.exit(1);
})
