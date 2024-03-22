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
		spacing={4}
		alignItems="flex-start"
		className='layout-container'
		sx={{ backgroundColor: '#ffffff', padding: '2em', width: `100%`, margin: 0}}
	>
		<Grid xs={8} md={4} item>
			{columnOne}
		</Grid>
		<Grid xs={8} md={8} item>
		{columnTwo}
		</Grid>
	</Grid>
	</>
	)
}
export default Layout