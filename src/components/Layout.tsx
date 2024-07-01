'use client';
import * as React from 'react';
import { Grid } from '@mui/material';
import LayoutContainer from './LayoutContainer';

interface Layout {
	columnOne: React.ReactNode;
	columnTwo: React.ReactNode;
}

const Layout = (props: Layout) => {
	const { columnOne, columnTwo } = props;
	return (
		<>
			<LayoutContainer>
				<Grid
					xs={12}
					md={3}
					item
				>
					{columnOne}
				</Grid>
				<Grid
					xs={12}
					md={8}
					item
				>
					{columnTwo}
				</Grid>
			</LayoutContainer>
		</>
	);
};
export default Layout;
