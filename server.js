const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(8000, () => {
    console.log('server on port 8000');
});
const io = socket(server);

// listen

io.on('connection', (socket) => {
    socket.emit('updateData', tasks);

    socket.on('addTask', (newTask) => {
        tasks.push(newTask);
        socket.broadcast.emit('addTask', newTask);
    });
    socket.on('removeTask', id => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        tasks.splice(taskIndex, 1);
        socket.broadcast.emit('removeTask', id);
    });
});

const tasks = [];