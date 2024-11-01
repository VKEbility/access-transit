import { createTheme } from '@mantine/core';

const myColor = [
  '#eaf5ff',
  '#d8e6f7',
  '#afcbeb',
  '#84aee0',
  '#6096d7',
  '#4987d2',
  '#3c7fd0',
  '#2d6db9',
  '#2361a6',
  '#105394',
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default theme;
