'use client';
import * as React from 'react';
import { Grid } from '@mui/material';

interface Layout {
	columnOne: React.ReactNode
	columnTwo: React.ReactNode
}

const Layout = (props: Layout) => {
	const {columnOne, columnTwo} = props
	return (
		<>
		<Grid
		container
		spacing={0}
		alignItems="flex-start"
		className='layout-container'
		sx={{ backgroundColor: '#ffffff', padding: '2em', width: `100%`, margin: 0}}
	>
		<Grid xs={12} md={2} item spacing={4}>
			{columnOne}
		</Grid>
		<Grid xs={12} md={10} item spacing={4}>
		{columnTwo}
		</Grid>
	</Grid>
	</>
	)
}
export default Layout