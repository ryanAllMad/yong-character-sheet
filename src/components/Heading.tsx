'use client';
import * as React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { init } from 'commandbar';

interface Heading {
	variant: any;
	headingChildren: React.ReactNode;
	id?: string;
	gutterBottom?: boolean;
}

const Heading = (props: Heading) => {
	const { headingChildren, variant, id, gutterBottom } = props;
	const theme = useTheme();
	const [hasRecord, setHasRecord] = React.useState('')
	const { palette } = theme;
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
		init('cf7c5d84');
		window.CommandBar.boot('12345');
		window.CommandBar.trackEvent('page-view', {});
		window.CommandBar.addCallback('makeMeLaugh', getJokes);
		/** Had some hydration issues adding this custom component.
		window.CommandBar.addComponent(
			'jokes-preview',
			'Basic jokes Preview',
			{
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
			}
		);
		*/
		const onSearchContacts = async () => {
			const response =  await fetch(`https://official-joke-api.appspot.com/random_joke`);
			
			return response.json()
		}
		window.CommandBar.addRecords(
			'jokes', 
			[
			{
				setup: 'What do you call a crowd of chess players bragging about their wins in a hotel lobby?',
				punchline: 'Chess nuts boasting in an open foyer.'
			}
		], {
			onInputChange: onSearchContacts
		});
		window.CommandBar.addRecordAction('jokes', {
			text: 'Make me laugh',
			name: 'make_me_laugh',
			template: {
				type: 'callback',
				value: 'makeMeLaugh',
			},
		});

	}, []);

	return (
		<>
		<Typography
			id={id}
			variant={variant}
			sx={{ color: palette.secondary.dark }}
			gutterBottom={gutterBottom}
		>
			{headingChildren}
		</Typography>
		{hasRecord && hasRecord}
		</>
	);
};

export default Heading;
