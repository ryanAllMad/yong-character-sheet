'use client';
import * as React from 'react';
import { Avatar, Grid, Stack, Paper, Typography } from '@mui/material';
import data from '../../public/yong.json';
import { useTheme } from '@mui/material/styles';
import Heading from './Heading';
import Abilities from './Abilities';

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
			<Grid
				container
				spacing={4}
			>
				<Grid xs={6} md={8} item>
					<Stack spacing={1}>
						<Heading level='h3'>Race:</Heading>
						<Typography>{data.system.details.race}</Typography>
						<Heading level='h3'>Alignment</Heading>
						<Typography>{data.system.details.alignment}</Typography>
						<Heading level='h3'>Bio</Heading>
						<Typography>
							{data.system.details.biography.value}
						</Typography>
						<Heading level='h3'>Flaw</Heading>
						<Typography>{data.system.details.flaw}</Typography>
					</Stack>
				</Grid>
				<Abilities />
			</Grid>
		</Paper>
	);
};
export default Profile;
