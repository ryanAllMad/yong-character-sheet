'use client';
import * as React from 'react';
import { Link, List, ListItem, Paper, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Readex_Pro } from 'next/font/google';
import Heading from '@/components/Heading';

const bodyFont = Readex_Pro({
	weight: '400',
	style: 'normal',
	subsets: ['latin', 'latin-ext'],
});

const TOC = () => {
	const theme = useTheme()
	const aStyles = {
		fontSize: '1em',
		fontFamily: bodyFont.style.fontFamily,
		color: theme.palette.primary.dark,
		textDecoration: `underline ${theme.palette.primary.dark}`
	} as React.CSSProperties;
	return (
		<Paper sx={{ padding: `2em` }}>
		<Stack>
			<Heading
				id='top'
				variant='h2'
				headingChildren='Table of Contents'
			/>
			<List>
				<ListItem>
					<Link
						sx={aStyles}
						href='/spellbook#cantrips'
					>
						Cantrips
					</Link>
				</ListItem>
				<ListItem>
					<Link
						sx={aStyles}
						href='/spellbook#one'
					>
						Level One
					</Link>
				</ListItem>
				<ListItem>
					<Link
						sx={aStyles}
						href='/spellbook#two'
					>
						Level Two
					</Link>
				</ListItem>
				<ListItem>
					<Link
						sx={aStyles}
						href='/spellbook#three'
					>
						Level Three
					</Link>
				</ListItem>
			</List>
		</Stack>
	</Paper>
	)
}

export default TOC