'use client';
import * as React from 'react';
import { Avatar, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Spells {
	imageSource: string;
	name: string;
}

const Spells = (props: Spells) => {
	const { imageSource, name } = props;
	const theme = useTheme();
	const query = useMediaQuery(theme.breakpoints.down('md'))
	const { palette } = theme;
	return (
		<>
			<Grid
				item
				xs={12}
				md={3}
				sx={{display: 'flex'}}
				justifyContent={query ? 'center' : 'flex-end'}
			>
					<Avatar
						sx={{
							width: query ? 200 : 100,
							height: query ? 200 : 100,
							bgcolor: `${palette.primary.dark}`,
							border: `2px solid ${palette.primary.main}`,
						}}
						src={imageSource}
						alt={name}
					/>
			</Grid>
		</>
	);
};

export default Spells;
