const http = require('http');
const server = http.createServer();
// 解析参数
const qs = require('querystring');

const nick_names = []
// 监听
server.on('request', (request, response) => {
  const url = request.url;

  // /hi
  const path = url.substr(0, url.indexOf('?'))
    
  switch(path) {
    case '/hi':
      switch(request.method) {
        case 'GET':
          response.statusCode = 200;
          response.end(JSON.stringify(nick_names));
          break;
        case 'POST':
          const nick_name = { name: Math.floor(Math.random() * 100) };
          nick_names.push(nick_name);
          response.statusCode = 200;
          response.end(JSON.stringify(nick_names));
          break;
      }
      break;
    default:
      response.statusCode = 404
      response.end("Not Found");
      break;
  }

})

server.listen(9090)
