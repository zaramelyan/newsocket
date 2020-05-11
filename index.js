// require express first
var express = require("express");
//require socket.IO
var socket = require('socket.io')

var app = express();

const port = process.env.PORT || 4000;
var server = app.listen(port, function () {
    console.log( `Listening to requests on port ${port}`);
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function (socket) {
  console.log("made socket connection, id: " + socket.id);
  socket.on('disconnect', () => console.log('user disconnected, id: ' + socket.id))

      socket.on("chat message", (message) => {
        console.log(message);
        io.emit("chat message", message);
      });
});