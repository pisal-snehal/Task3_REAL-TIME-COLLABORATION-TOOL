// server.js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public")); // serve static files from public folder

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("join-room", (room) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);

        socket.on("text-change", (data) => {
            socket.to(room).emit("text-change", data);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
});

http.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
