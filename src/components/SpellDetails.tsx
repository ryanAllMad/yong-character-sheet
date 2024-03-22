'use client';
import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import Heading from './Heading';

//sp.system.description.value
interface SpellDetails {
	name: string;
	description: string;
}

const SpellDetails = (props: SpellDetails) => {
	const { name, description } = props;

	return (
		<>
			<Grid
				item
				xs={12}
				md={10}
				sx={{
					display: '-webkit-box',
					WebkitLineClamp: '4',
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
					lineHeight: '1.8',
					paddingBottom: 0,
					marginBottom: 16,
				}}
			>
				<Heading
					level='h3'
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
