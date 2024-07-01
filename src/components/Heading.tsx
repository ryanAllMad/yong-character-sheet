'use client';
import * as React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { init } from 'commandbar'

interface Heading {
	variant: any;
	headingChildren: React.ReactNode;
	id?: string;
	gutterBottom?: boolean
}

const Heading = (props: Heading) => {
	const { headingChildren, variant, id, gutterBottom } = props;
	const theme = useTheme();
	const { palette } = theme;
	const getJokes = async () => {
		const results = await fetch(`https://official-joke-api.appspot.com/random_joke`, {
			method: 'GET'
		}).then((response) =>
			response.json()
		)
		const punchline = `${results.punchline}`
		const setup = `${results.setup}`
		const triggerSetup = () => {
			setTimeout(() => {
				return alert(punchline)
			}, 1500)
			return alert(setup)
		}
		return triggerSetup()
	}
	React.useEffect(() => {
		init("cf7c5d84")
		window.CommandBar.boot('12345')
		window.CommandBar.trackEvent('page-view', {})
		window.CommandBar.addCallback('makeMeLaugh', getJokes)
	}, [])
	
	return (
		<Typography
			id={id}
			variant={variant}
			sx={{ color: palette.secondary.dark}}
			gutterBottom={gutterBottom}
		>
			{headingChildren}
		</Typography>
	);
};

export default Heading;
