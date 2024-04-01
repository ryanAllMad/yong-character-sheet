'use client';
import * as React from 'react';
import {
	Avatar,
	Grid,
	Stack,
	Paper,
	Typography,
	useMediaQuery
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
	const query = useMediaQuery(theme.breakpoints.down('md'))
	const { palette } = theme;
	return (
		<Paper sx={{ padding: `2em` }}>
			<Grid
				container
				spacing={0}
				alignItems='flex-start'
			>
				<Grid item xs={12} md={2} sx={{ display: query ? 'flex' : 'block', flexDirection: query ? 'column' : 'unset'}} alignItems={query ? 'center' : 'unset'}>
					<Typography variant='h1' gutterBottom>{pageHeading}</Typography>
					<Avatar
						src={src}
						alt='Yong Of Artimal, female paladin'
						sx={{
							width: query ? 200 : 100,
							height: query ? 200 : 100,
							border: `2px solid ${palette.primary.main}`,
						}}
					/>
				</Grid>
				<Grid item xs={12} md={10}>
					<Stack>
						<Typography
							variant='h2'
							gutterBottom
							sx={query ? ({paddingTop: '2em'}) : ({paddingTop: 0})}
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
