const http = require('http');
const server = http.createServer();
// 解析参数
const qs = require('querystring');

// 监听
server.on('request', (request, response) => {
  const url = request.url;
})
