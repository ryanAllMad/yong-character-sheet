'use client';
import * as React from 'react';
import {
	Avatar,
	Grid,
	Stack,
	Paper,
	Typography
} from '@mui/material';
import data from '../../public/yong.json';
import { useTheme } from '@mui/material/styles';
import InlineBox from './InlineBox';

interface Profile {
	pageHeading: string;
	src: string;
}

const Profile = (props: Profile) => {
	const { pageHeading, src } = props;
	const theme = useTheme();
	const { palette } = theme;
	return (
		<Paper sx={{ padding: `2em` }}>
			<Grid
				container
				spacing={4}
				alignItems='center'
			>
				<Grid item xs={12} md={2}>
					<Typography variant='h1'>{pageHeading}</Typography>
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
				<Grid item xs={12} md={10}>
					<Stack>
						<Typography
							variant='h2'
							gutterBottom
						>
							{data.name}
						</Typography>
						<InlineBox headingChildren="Weapon Of Choice:">
							<span lang='gv'>Gae Bolg</span>
						</InlineBox>
						<InlineBox headingChildren="Notable Kills:">
						Dragons: 2<br />
						Giants: 1
						</InlineBox>
						<InlineBox headingChildren="Fun Fact:">
								She may look like the party leader, but she does
								whatever the 4 <sup>1/2</sup> foot tall elf
								wizard tells her to.
						</InlineBox>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default Profile;
