console.log("hello Vitaliy");
//alert('hello') // alert don't work in nodeJs

// create server

let http = require('http');
const {usersControllers} = require("./usersController");
const {addUsers} = require("./repository");
// like => import http from 'http'

const cors = (res, req) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return true;
  }
  return false
}

let server = http.createServer((req, res) => {
  if (cors(res, req)) return;

  switch (req.url) {
    case "/users":
      usersControllers(req, res)
      break;
    case "/tasks":
      res.write(`tasks`)
      break;
    default:
      res.write(`page not found`)
  }

  /*  res.write(`<h1>server works</h1>
      <script>
        alert("Yo man")
      </script>`)*/
})

server.listen(3333);
