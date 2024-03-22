'use client';
import * as React from 'react';
import { Avatar, Grid, Stack, Paper, Typography } from '@mui/material';
import data from '../../public/yong.json';
import { useTheme } from '@mui/material/styles';


interface Profile {
	src: string;
}

const Profile = (props: Profile) => {
	const { src } = props;
	const theme = useTheme();
	const { palette } = theme;
	return (
		<Paper sx={{ padding: `2em` }}>
			<Grid
				container
				spacing={4}
				alignItems="center"
			>
				<Grid item>
					<Avatar
						src={src}
						alt='Yong Of Artimal, female paladin'
						sx={{
							width: 100,
							height: 100,
							border: `2px solid ${palette.primary.main}`,
						}}
					/>
				</Grid>
				<Grid item>
					{' '}
					<Typography
						variant='h2'
						gutterBottom
					>
						{data.name}
					</Typography>
				</Grid>
			</Grid>

		</Paper>
	);
};
export default Profile;
