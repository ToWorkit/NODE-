const axios = require('axios');
const cherrio = require('cheerio');

(async () => {

  const res = await axios.get('http://www.acfun.cn/a/ac4127544');
  const html = res.data;

  const $ = cherrio.load(html);
  const articleContent = $('.article-content');

  const p_text = articleContent.children('p').text();
  console.log(p_text)

})().then(r => {
  process.exit(0)
  console.log(process)
}).catch(e => {
  console.log(e)
  process.exit(1);
})
