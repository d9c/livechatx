import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const DarkTheme = {
  background: '#000',
  text: '#FFF',
  fontFamily: inter.className.replace('className', 'Inter'),
  border: {
    main: '#333',
    hover: '#FFF',
  },
  button: {
    main: '#333',
    hover: 'rgba(51, 51, 51, 0.5)',
  },
  message: {
    sent: '#3D3D3D',
    received: '#1F1F1F',
  },
};
