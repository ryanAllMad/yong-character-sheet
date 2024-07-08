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
import { init } from 'commandbar';
import { useRouter } from 'next/navigation';

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
			easing={{ enter: 'ease-in', exit: 'ease-out' }}
		>
			{children}
		</Slide>
	);
};

export default function MyAppBar(props: MyAppBar) {
	const theme = useTheme();
	const nav = useRouter();
	const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion)');
	const [animationClass, setAnimationClass] = React.useState('');
	const [roll, setRoll] = React.useState('?');
	const [screenInstruct, setScreenInstruct] =
		React.useState('enter to roll dice');
	const { palette } = theme;
	const [critical, setCritical] = React.useState<string | boolean>(false);
	const handleClick = () => {
		const rollResult = Math.floor(Math.random() * 20) + 1;
		if (!prefersReducedMotion) {
			setAnimationClass((prev) => (!prev ? 'roll' : ''));
		}
		if (prefersReducedMotion) {
			setAnimationClass((prev) => (!prev ? 'flip-once' : ''));
		}
		setScreenInstruct('you rolled: ');
		setRoll(`${rollResult}`);
		if (rollResult === 20) {
			setCritical('rgb(9, 72, 9)');
		}
		if (rollResult === 1) {
			setCritical('rgb(145, 8, 8)');
		}
		if (rollResult !== 1 && rollResult !== 20) {
			setCritical(`${palette.info.light}`);
		}
	};
	const reset = () => {
		setAnimationClass('');
		setCritical(palette.info.light);
		setRoll('?');
		setScreenInstruct('enter to roll dice');
	};
	const handleKeyDown = (e: React.KeyboardEvent) => {
		e.preventDefault();
		if (e.code === 'Enter' || e.code === 'Space') {
			handleClick();
		}
	};
	const initiateCommandBar = React.useCallback(() => init('cf7c5d84'), []);
	const getJokes = async () => {
		const results = await fetch(
			`https://official-joke-api.appspot.com/random_joke`,
			{
				method: 'GET',
			}
		).then((response) => response.json());
		const punchline = `${results.punchline}`;
		const setup = `${results.setup}`;
		const triggerSetup = () => {
			setTimeout(() => {
				return alert(punchline);
			}, 1500);
			return alert(setup);
		};
		return triggerSetup();
	};
	React.useEffect(() => {
		initiateCommandBar();
		window.CommandBar.boot('12345');
		window.CommandBar.trackEvent('page-view', {});
		window.CommandBar.addCallback('makeMeLaugh', getJokes);
		window.CommandBar.addComponent('jokes-preview', 'Basic jokes Preview', {
			mount: (elem) => ({
				render: (data, metadata) => {
					elem.innerHTML =
						'<div>' +
						'<h3>' +
						// @ts-expect-error - testing
						data?.setup +
						'</h3>' +
						'<div>' +
						// @ts-expect-error - testing
						data?.punchline +
						'"</div>' +
						'</div>';
				},
				unmount: () => {
					// ... clean up any timers, event handlers, etc. ...
				},
			}),
		});
		window.CommandBar.addRecords(
			'jokes',
			[
				{
					id: '12345',
					setup: 'What do you call a crowd of chess players bragging about their wins in a hotel lobby?',
					punchline: 'Chess nuts boasting in an open foyer.',
				},
			],
			{
				detail: { type: 'component', value: 'jokes-preview' },
			}
		);
		window.CommandBar.addRecordAction('jokes', {
			text: 'Tell Joke',
			name: 'joke_sample',
			template: {
				type: 'callback',
				value: 'makeMeLaugh',
			},
		});
	}, [initiateCommandBar]);
	React.useEffect(() => {
		const routerFunc = (url: string) => nav.push(url);
		window.CommandBar.addRouter(routerFunc);
	}, [nav]);
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
							<div className='dice-cup'>
								<div
									className='dice-inner'
									style={{
										transition: prefersReducedMotion
											? 'none'
											: 'transform 0.6s',
									}}
								>
									<div
										tabIndex={0}
										role='button'
										className={`dice ${animationClass}`}
										onClick={handleClick}
										onKeyDown={(e) => handleKeyDown(e)}
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
												bgcolor: !critical
													? `${palette.info.light}`
													: critical,
												color:
													roll === '20' ||
													roll === '1'
														? '#fff !important'
														: `${palette.info.dark}!important`,
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
