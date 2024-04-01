'use client';
import { createTheme } from '@mui/material/styles';
import { Readex_Pro, Cinzel_Decorative } from "next/font/google";

const bodyFont = Readex_Pro({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });
const titleFont = Cinzel_Decorative({ weight: '700', style: 'normal', subsets: ['latin'] });

const primary = {
	main: '#0291FF',
	light: '#80c8ff',
	dark: '#0e3452',
	contrastText: '#0F051C'
}
const secondary = {
	main: '#6E64DA',
	light: '#A49FDA',
	dark: '#290D4A'
}

const h1 = {
	fontSize: '1.98em',
	fontFamily: titleFont.style.fontFamily,
}
const h2 = {
	fontSize: '1.684em',
	fontFamily: titleFont.style.fontFamily,
}
const h3 = {
	fontSize: '1.33em',
	fontFamily: titleFont.style.fontFamily,
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
		htmlFontSize: 1.65,
		fontFamily: bodyFont.style.fontFamily
	}
})