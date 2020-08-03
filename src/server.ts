import express from 'express';
import socketio from 'socket.io';
import path from 'path';
import http from 'http';
import './database';
import router from './routes';

const app = express();
app.use(express.json());
const server = http.createServer(app);
export const io = socketio(server);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(router);

io.on('connection', socket => {
  console.log('New web socket connection');
});

server.listen(3333, () => console.log('Hello'));
