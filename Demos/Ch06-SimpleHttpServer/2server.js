const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Universe\n');
});

//start server and listen on port, hostname(optional),
//it runs until ended. Ctrl+C or Ctrl+break 

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`Server running at http://${hostname}:${port}/`);
});