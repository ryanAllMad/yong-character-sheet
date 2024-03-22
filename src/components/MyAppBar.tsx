'use client';
import * as React from 'react';
import Image from 'next/image';
import {
	AppBar,
	Box,
	List,
	ListItem,
} from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

export default function MyAppBar() {
	const theme = useTheme();
	const { palette } = theme
	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component='nav' sx={{ backgroundColor: '#ffffff', color: `${palette.secondary.dark}`, display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', padding: '1.5em' }}>
				<Link href='/' style={{ textDecoration: 'none', padding: '1.5rem' }}>
				<Image loading='eager' src="/dnd.jpg" alt="to home" width={100} />
				</Link>
						<List sx={{ display: 'flex', flexFlow: 'row nowrap', width: 100, justifyContent: 'flex-end' }}>
							<ListItem>
								<Link
									style={{ color: `${palette.secondary.dark}`, textDecoration: 'none' }}
									href='/'
								>
									About
								</Link>
							</ListItem>
							<ListItem>
								<Link
									style={{ color: `${palette.secondary.dark}`, textDecoration: 'none' }}
									href='/spellbook'
								>
									Spellbook
								</Link>
							</ListItem>
						</List>
			</AppBar>
		</Box>
	);
}
