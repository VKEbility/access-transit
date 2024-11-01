import { createTheme } from '@mantine/core';

const blueShades = {
	lightest: '#eaf5ff',
	lighter: '#d8e6f7',
	light: '#afcbeb',
	midLight: '#84aee0',
	normal: '#6096d7',
	midDark: '#4987d2',
	dark: '#3c7fd0',
	darker: '#2d6db9',
	veryDark: '#2361a6',
	darkest: '#105394',
};

const theme = createTheme({
	colors: {
		blue: Object.values(blueShades),
	},
});

export const colors = {
	lightest: blueShades.lightest,
	lighter: blueShades.lighter,
	light: blueShades.light,
	midLight: blueShades.midLight,
	normal: blueShades.normal,
	midDark: blueShades.midDark,
	dark: blueShades.dark,
	darker: blueShades.darker,
	veryDark: blueShades.veryDark,
	darkest: blueShades.darkest,
};

export default theme;
