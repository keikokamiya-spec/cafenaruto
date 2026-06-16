const http = require('http');
const fs = require('fs');
const path = require('path');
const root = '/Users/kamiya/Desktop/cafenaruto';
const mime = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.woff2':'font/woff2'};
http.createServer((req, res) => {
  let p = path.join(root, req.url === '/' ? 'index.html' : req.url);
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': mime[path.extname(p)] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(3456, () => console.log('Server running on port 3456'));
