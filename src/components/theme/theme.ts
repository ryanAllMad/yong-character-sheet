'use client';
import { createTheme } from '@mui/material/styles';

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
	fontSize: '2.15em'
}
const h2 = {
	fontSize: '1.98em'
}
const h3 = {
	fontSize: '1.75em'
}

export const theme = createTheme({
	palette: {
		primary,
		secondary
	},
	typography: {
		h1,
		h2,
		h3
	}
})