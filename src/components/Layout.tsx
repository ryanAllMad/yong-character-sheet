'use client';
import * as React from 'react';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LayoutContainer from './LayoutContainer';

interface Layout {
	columnOne: React.ReactNode;
	columnTwo: React.ReactNode;
}

const Layout = (props: Layout) => {
	const { columnOne, columnTwo } = props;
	const theme = useTheme();
	return (
		<>
			<LayoutContainer>
				<Grid
					xs={12}
					md={2}
					item
					spacing={4}
				>
					{columnOne}
				</Grid>
				<Grid
					xs={12}
					md={10}
					item
					spacing={4}
				>
					{columnTwo}
				</Grid>
			</LayoutContainer>
		</>
	);
};
export default Layout;
