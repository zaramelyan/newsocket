const port = process.env.PORT || 4000;
var socket = io.connect(`http://localhost:${port}`);

        const form = document.getElementById("message-form");
        form.addEventListener("submit", function (event) {
          event.preventDefault(); //overwrite default value, like ?
          const input = document.getElementById("message-input");
          const message = input.value;
          socket.emit("chat message", message);
          input.value = ""; //clears input field
        });

        socket.on("chat message", function (message) {
          const chatWindow = document.getElementById("messages");
          chatWindow.innerHTML =
            "<li>" + socket.id + ": " + message + "</li>" + chatWindow.innerHTML;
        });