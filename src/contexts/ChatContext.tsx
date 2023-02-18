import { createContext, SetStateAction, useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

type User = {
  name: string;
  room: string;
};

type ContextValues = {
  socket: Socket | undefined;
  userSettings: User;
  setUserSettings: React.Dispatch<SetStateAction<User>>;
  userList: User[];
  setUserList: React.Dispatch<SetStateAction<User[]>>;
};

type Props = {
  children: JSX.Element;
};

const initialValues = {
  socket: undefined,
  userSettings: {
    name: '',
    room: '',
  },
  setUserSettings: () => {},
  userList: [],
  setUserList: () => {},
};

const socket: Socket = io('https://livechat.backend.up.railway.app');

export const ChatContext = createContext<ContextValues>(initialValues);

export const ChatContextProvider = ({ children }: Props) => {
  const [userSettings, setUserSettings] = useState(initialValues.userSettings);
  const [userList, setUserList] = useState<User[]>(initialValues.userList);

  useEffect(() => {
    socket.on('roomData', (users: User[]) => setUserList(users));

    return () => {
      socket.off('roomData');
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        socket,
        userSettings,
        setUserSettings,
        userList,
        setUserList,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
