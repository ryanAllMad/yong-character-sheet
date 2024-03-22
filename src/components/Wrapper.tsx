'use client';
import * as React from 'react';
import { Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';


interface Wrapper {
	children: React.ReactNode;
}

const Wrapper = (props: Wrapper) => {
	const { children } = props;
	const theme = useTheme();
	const { palette } = theme
	return (
		<Paper sx={{ height: `100%`, padding: `4em 2em`, backgroundColor: `${palette.secondary.main}` }}>
			{children}
		</Paper>
	)
}
export default Wrapper