import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const DarkTheme = {
  background: '#0b0b0b',
  text: '#ffffff',
  fontFamily: inter.className.replace('className', 'Inter'),
  border: {
    main: '#333333',
    hover: '#ffffff',
  },
  button: {
    main: '#333333',
    hover: 'rgba(51, 51, 51, 0.5)',
  },
  message: {
    sent: '#3d3d3d',
    received: '#1f1f1f',
  },
};
