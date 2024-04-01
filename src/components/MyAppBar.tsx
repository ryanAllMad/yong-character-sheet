'use client';
import * as React from 'react';
import {
	AppBar,
	Avatar,
	Box,
	List,
	ListItem,
	Slide,
	Stack,
	Typography,
	useMediaQuery,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
const confetti = require('canvas-confetti');
import { useTheme } from '@mui/material/styles';
import { Cinzel_Decorative } from 'next/font/google';

const titleFont = Cinzel_Decorative({
	weight: '700',
	style: 'normal',
	subsets: ['latin'],
});

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
			easing={{enter: 'ease-in', exit: 'ease-out'}}
		>
			{children}
		</Slide>
	);
};

export default function MyAppBar(props: MyAppBar) {
	const theme = useTheme();
	const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion)');
	const [animationClass, setAnimationClass] = React.useState('');
	const [roll, setRoll] = React.useState('?');
	const [screenInstruct, setScreenInstruct] = React.useState('enter to roll dice')
	const { palette } = theme;
	const [critical, setCritical] = React.useState<string | boolean>(false);
	const handleClick = () => {
		const rollResult = Math.floor(Math.random() * 20) + 1;
		if(!prefersReducedMotion) {
			setAnimationClass((prev) => (!prev ? 'roll' : ''));
		}
		if(prefersReducedMotion) {
			setAnimationClass((prev) => (!prev ? 'flip-once' : ''));
		}
		setScreenInstruct('you rolled: ')
		setRoll(`${rollResult}`);
		if (rollResult === 20) {
			setCritical('rgb(9, 72, 9)');
		}
		if (rollResult === 1) {
			setCritical('rgb(145, 8, 8)');
		}
	};
	const reset = () => {
		setAnimationClass('');
		setCritical(palette.info.light);
		setRoll('?');
		setScreenInstruct('enter to roll dice')
	};
	React.useEffect(() => {
		if (roll === '20' && !prefersReducedMotion) {
			confetti.default();
		}
	}, [prefersReducedMotion, roll]);

	return (
		<>
			<ShrinkOnscroll {...props}>
				<Box sx={{ display: 'flex' }}>
					<AppBar
						component='nav'
						sx={{
							backgroundColor: palette.info.dark,
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
						<Stack
							alignItems='center'
							spacing={2}
						>
							<div className='dice-cup' tabIndex={0} role="button">
								<div className='dice-inner' style={{transition: prefersReducedMotion ? 'none' : 'transform 0.6s'}}>
									<div
										className={`dice ${animationClass}`}
										onClick={handleClick}
									>
										<Avatar
											src='/20die.jpg'
											alt='roll 20 sided die'
											sx={{
												width: 55,
												height: 55,
												border: `2px outset ${palette.primary.main}`,
											}}
										/>
									</div>
									<div
										className='dice-back'
										aria-live='polite'
										onClick={reset}
									>
										<Avatar
										// @ts-ignore
											sx={{
												width: 55,
												height: 55,
												bgcolor: !critical ? `${palette.info.light}` : critical,
												color: roll === '20' || roll === '1' ? '#fff !important' : `${palette.info.dark}!important`
											}}
										>
											<Typography variant='h2'>
												<span className='screen-reader-text'>
													{screenInstruct}
												</span>
												{roll}
												<span className='screen-reader-text'>
													{roll === '20' &&
														'critical hit!'}
													{/* @ts-ignore */}
													{roll === '1' &&
														'critical miss!'}
												</span>
											</Typography>
										</Avatar>
									</div>
								</div>
							</div>
							<Typography
								variant='caption'
								sx={{ width: 84 }}
							>
								{roll === '20' ? 'Nice!' : 'feeling luky?'}
							</Typography>
						</Stack>
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
