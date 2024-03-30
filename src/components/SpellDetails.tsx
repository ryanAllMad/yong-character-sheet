'use client';
import * as React from 'react';
import { Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Heading from './Heading';

//sp.system.description.value
interface SpellDetails {
	name: string;
	description: string;
}

const SpellDetails = (props: SpellDetails) => {
	const { name, description } = props;
	const theme = useTheme();
	const query = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<>
			<Grid
				item
				xs={12}
				md={10}
				spacing={4}
				sx={{
					display: '-webkit-box',
					WebkitLineClamp: '4',
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
					lineHeight: '1.8',
					padding: 0,
					paddingTop: query ? '2em' : '0',
					marginBottom: 16,
				}}
			>
				<Heading
					level='h2'
					headingChildren={name}
				/>
				<Typography sx={{ fontSize: '18px' }}>
					<span
						dangerouslySetInnerHTML={{
							__html: description ,
						}}
					/>
				</Typography>
			</Grid>
		</>
	);
};

export default SpellDetails;
