import http from 'http';
import {Server} from 'socket.io';
import {app} from './app.js';

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('connected');

    socket.on("send location data", (data) => {
        io.emit("receive location data", {id:socket.id,...data});
    })

    socket.on("disconnect", () => {
        io.emit("user disconnected", socket.id);
    })
})

export {server};