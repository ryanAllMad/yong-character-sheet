'use client';
import * as React from 'react';
import { Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Spells {
	imageSource: string;
	name: string;
}

const Spells = (props: Spells) => {
	const { imageSource, name } = props;
	const theme = useTheme();
	const { palette } = theme;
	return (
		<>
			<Grid
				item
				xs={12}
				md={2}
			>
					<Avatar
						sx={{
							width: 100,
							height: 100,
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
