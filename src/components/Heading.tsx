'use client';
import * as React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
