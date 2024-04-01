'use client';
import * as React from 'react';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface LayoutContainerProps {
	children: React.ReactNode | React.ReactElement | string;
}

const LayoutContainer = (props: LayoutContainerProps) => {
	const { children } = props;
	const theme = useTheme();
	return (
		<>
			<Grid
				container
				spacing={0}
				alignItems='flex-start'
				className='layout-container'
				sx={{
					backgroundColor: theme.palette.info.dark,
					padding: '2em',
					width: `100%`,
					margin: 0,
				}}
			>
				{children}
			</Grid>
		</>
	);
};
export default LayoutContainer;
