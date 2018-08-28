const http = require('http');
// 创建服务
const server = http.createServer();
// 参数解析
const qs = require('querystring');

// 监听请求
server.on('request', (request, response) => {
  const url = request.url;
  console.log(url); // /hi?need_money=true&how_mouch=300

  // 截取参数
  const querystring = url.substr(url.indexOf('?') + 1, url.length);
  console.log(querystring); // need_money=true&how_mouch=300

  // 格式化参数
  const query = qs.parse(querystring);
  console.log(query); // { need_money: 'true', how_mouch: '300' }

  let responseStr;
  if (url.indexOf('/hi') != -1) {
    if (query.need_money === 'true' && Number(query.how_mouch) > 500) {
      responseStr = 'Go Away';
    } else {
      responseStr = 'ok, here you are';
    }
  } else if (url.indexOf('/bye') != -1) {
    responseStr = 'See You'
  } else {
    responseStr = 'emmmm'
  }

  response.statusCode = 200;
  response.end(responseStr)
});

server.listen(8090);
