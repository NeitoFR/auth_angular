// Dependencies
const http = require("http"),
  path = require("path"),
  cors = require("cors"),
  express = require("express"),
  bodyParser = require('body-parser'),
  app = express();

require("dotenv").config();
app.use(cors());
app.use(express.static(path.join(__dirname, "/..", "dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('*', (req, res, next) => {
    console.log('Request received on route : '+ req.path," with method : "+ req.method);
    if(req.method == "POST")
        console.log("Body : "+ JSON.stringify(req.body));
        
    next();
})

app.use(require("./services/login-service"));


const httpServer = http.createServer(app);

httpServer.listen(process.env.DEV_SERVER_PORT, () => {
  console.log("HTTP Server running on port " + process.env.DEV_SERVER_PORT);
  console.log("http://localhost:" + process.env.DEV_SERVER_PORT);
});


// io = require("socket.io").listen(httpServer);

// io.sockets.on("connection", function(socket) {
//   console.log("Un client est connecté !");
//   socket.emit("hello", "Hello from server WS");
//   socket.on("hello", message => {
//     console.log("New message", message);
//   });
// });
