'use client';
import { createTheme } from '@mui/material/styles';
import { Peralta } from "next/font/google";

const font = Peralta({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });

const primary = {
	main: '#0291FF',
	light: '#80c8ff',
	dark: '#194d75',
	contrastText: '#0F051C'
}
const secondary = {
	main: '#6E64DA',
	light: '#A49FDA',
	dark: '#290D4A'
}

const h1 = {
	fontSize: '2.15em',
	fontFamily: font.style.fontFamily
}
const h2 = {
	fontSize: '1.98em',
	fontFamily: font.style.fontFamily
}
const h3 = {
	fontSize: '1.142em',
	fontFamily: font.style.fontFamily
}

export const theme = createTheme({
	palette: {
		primary,
		secondary
	},
	typography: {
		h1,
		h2,
		h3,
		fontSize: 1.65,
		htmlFontSize: 1.65
	}
})