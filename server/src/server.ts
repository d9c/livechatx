import express, { Request, Response } from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { Server as SocketServer, Socket } from 'socket.io';
import moment from 'moment';
import dotenv from 'dotenv';

import { addUser, getUsersInRoom, getUser, removeUser } from './user.js';
import { User } from './types/User.js';

dotenv.config();

const app = express();
const server = createServer(app);
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'LiveChat' });
});

const io: SocketServer = new SocketServer(server, {
  cors: {
    origin: process.env.ORIGIN,
  },
});

io.on('connection', (socket: Socket) => {
  // User joins room
  socket.on(
    'joinRoom',
    (
      { name, room }: { name: string; room: string },
      callback: (error?: string) => string | void
    ) => {
      const { user, error }: { user?: User; error?: string } = addUser({
        id: socket.id,
        name,
        room,
      });

      if (error) {
        return callback(error);
      }

      if (user) {
        socket.join(user.room);
        io.in(user.room).emit('roomData', getUsersInRoom(user.room));
        socket
          .to(user.room)
          .emit('userJoined', `${user.name} joined the room.`);
        callback();
        console.log(`User ${user.name} joined room ${user.room}`);
      }
    }
  );

  // User sends message
  socket.on('sendMessage', (message: string, callback: () => void) => {
    const user = getUser(socket.id);
    if (user) {
      io.in(user.room).emit('newMessage', {
        name: user.name,
        text: message,
        timestamp: moment().format('h:mm A'),
      });
      callback();
    }
  });

  // User disconnects
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      socket.to(user.room).emit('roomData', getUsersInRoom(user.room));
      socket.to(user.room).emit('userLeft', `${user.name} left the room.`);
      console.log(`User ${user.name} left room ${user.room}`);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
