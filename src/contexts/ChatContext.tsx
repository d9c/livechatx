import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import io, { Socket } from 'socket.io-client';

type User = {
  name: string;
  room: string;
};

type ContextValues = {
  socket: Socket | undefined;
  userSettings: User;
  setUserSettings: Dispatch<SetStateAction<User>>;
  userList: User[];
  setUserList: Dispatch<SetStateAction<User[]>>;
};

type Props = {
  children: ReactNode;
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

const socket = io('https://livechat.backend.up.railway.app');

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
