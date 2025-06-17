// public/script.js
const socket = io();
const room = prompt("Enter room name:");
document.getElementById("room-name").innerText = room;
socket.emit("join-room", room);

const editor = document.getElementById("editor");

// Send text changes to other users in room
editor.addEventListener("input", () => {
    const content = editor.value;
    socket.emit("text-change", content);
});

// Receive text changes from others
socket.on("text-change", (data) => {
    editor.value = data;
});
