'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Readex_Pro, Cinzel_Decorative } from 'next/font/google';

const bodyFont = Readex_Pro({
	weight: '400',
	style: 'normal',
	subsets: ['latin', 'latin-ext'],
});
const titleFont = Cinzel_Decorative({
	weight: '700',
	style: 'normal',
	subsets: ['latin'],
});

interface ThemeProps {
	children: React.ReactElement | React.ReactNode | string
}

export const Theme = (props: ThemeProps) => {
	const { children } = props
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
	const theme = React.useMemo(
		() => {
			const primary = {
				main: '#0291FF',
				light: '#80c8ff',
				dark: prefersDark ? '#80c8ff' : '#0e3452',
				contrastText: '#0F051C',
			};
			const secondary = {
				main: '#6E64DA',
				light: '#A49FDA',
				dark: prefersDark ? '#fff' : '#290D4A',
			};
			const info = {
				main: '#444',
				light: prefersDark ? '#fff' : '#222',
				dark: prefersDark ? '#222' : '#fff',
				contrastText: '#000'
			}
		
			const h1 = {
				fontSize: '1.98em',
				fontFamily: titleFont.style.fontFamily,
			};
			const h2 = {
				fontSize: '1.684em',
				fontFamily: titleFont.style.fontFamily,
			};
			const h3 = {
				fontSize: '1.33em',
				fontFamily: titleFont.style.fontFamily,
			};
			return createTheme({
				palette: {
					mode: prefersDark ? 'dark' : 'light',
					primary,
					secondary,
					info
				},
				typography: {
					h1,
					h2,
					h3,
					fontSize: 1.65,
					htmlFontSize: 1.65,
					fontFamily: bodyFont.style.fontFamily,
				},
			})
		},
		[prefersDark]
	);
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
