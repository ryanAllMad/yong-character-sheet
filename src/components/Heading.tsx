'use client';
import * as React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Heading {
	level: string;
	children: React.ReactNode;
}

const Heading = (props: Heading) => {
	const { children, level } = props;
	const theme = useTheme();
	const { palette } = theme;
	
	return (
		<Typography
		//@ts-expect-error
			variant={level}
			sx={{ color: palette.secondary.dark }}
		>
			{children}
		</Typography>
	);
};

export default Heading;
