import { User } from './types/User';

const users = new Map<string, User>();

export const addUser = (user: User): { user: User } | { error: string } => {
  const userExists = Array.from(users.values()).find(
    (o) => o.room === user.room && o.name === user.name
  );

  if (userExists) {
    return { error: 'This username is already in use.' };
  }

  users.set(user.id, user);

  return { user };
};

export const getUser = (id: string) => {
  return users.get(id);
};

export const getUsersInRoom = (room: string) => {
  return Array.from(users.values()).filter((user) => user.room === room);
};

export const removeUser = (id: string) => {
  const user = getUser(id);

  if (user) {
    users.delete(id);
    return user;
  }
};
