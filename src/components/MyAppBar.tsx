'use client';
import * as React from 'react';
import Image from 'next/image';
import { AppBar, Box, List, ListItem, Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Cinzel_Decorative } from "next/font/google";

const titleFont = Cinzel_Decorative({ weight: '700', style: 'normal', subsets: ['latin'] });

interface MyAppBar {
	window?: () => Window;
	children: React.ReactElement;
}

const ShrinkOnscroll = (props: MyAppBar) => {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});
	return (
		<Slide
			appear={false}
			direction='down'
			in={!trigger}
		>
			{children}
		</Slide>
	);
};

export default function MyAppBar(props: MyAppBar) {
	const theme = useTheme();
	const { palette } = theme;
	return (
		<>
			<ShrinkOnscroll {...props}>
				<Box sx={{ display: 'flex' }}>
					<AppBar
						component='nav'
						sx={{
							backgroundColor: '#ffffff',
							color: `${palette.secondary.dark}`,
							display: 'flex',
							flexFlow: 'row nowrap',
							justifyContent: 'space-between',
							padding: '1.5em',
						}}
					>
						<div className='screen-reader-text'>
							<Link href='#content'>Skip to content</Link>
						</div>
						<Link
							href='/'
							style={{
								textDecoration: 'none',
								padding: '1.5rem',
							}}
						>
							<Image
								loading='eager'
								src='/dnd.jpg'
								alt='to about'
								width={50}
							/>
						</Link>
						<List
							sx={{
								display: 'flex',
								flexFlow: 'row nowrap',
								width: 100,
								justifyContent: 'flex-end',
							}}
						>
							<ListItem>
								<Link
									style={{
										color: `${palette.secondary.dark}`,
										textDecoration: 'none',
									}}
									className={titleFont.className}
									href='/'
								>
									About
								</Link>
							</ListItem>
							<ListItem>
								<Link
									className={titleFont.className}
									style={{
										color: `${palette.secondary.dark}`,
										textDecoration: 'none',
									}}
									href='/spellbook'
								>
									Spellbook
								</Link>
							</ListItem>
						</List>
					</AppBar>
				</Box>
			</ShrinkOnscroll>
		</>
	);
}
