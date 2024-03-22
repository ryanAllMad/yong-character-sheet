'use client';
import * as React from 'react';
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
			<AppBar component='nav' sx={{ backgroundColor: `${palette.secondary.dark}` }}>
						<List sx={{ display: 'flex', flexFlow: 'row nowrap', width: 100 }}>
							<ListItem>
								<Link
									style={{ color: '#ffffff' }}
									href='/'
								>
									About
								</Link>
							</ListItem>
							<ListItem>
								<Link
									style={{ color: '#ffffff' }}
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
