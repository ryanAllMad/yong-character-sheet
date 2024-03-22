'use client';
import * as React from 'react';
import { Avatar, Button, Stack, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Spells {
	imageSource: string;
	key: any;
	name: string;
}

const Spells = (props: Spells) => {
	const { imageSource, key, name } = props;
	const theme = useTheme();
	const { palette } = theme;
	return (
		<>
			<List>
				<ListItem
					key={key}
					sx={{ minHeight: 225, justifyContent: 'flex-end' }}
				>
					<Stack>
						<Button
							style={{
								width: 104,
								height: 104,
								borderRadius: '50%',
								background:
									'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(110,100,218,1) 35%, rgba(0,212,255,1) 100%)',
							}}
						>
							<Avatar
								sx={{
									width: 100,
									height: 100,
									bgcolor: `${palette.primary.dark}`,
								}}
								src={imageSource}
								alt={name}
							/>
						</Button>
					</Stack>
				</ListItem>
			</List>
		</>
	);
};

export default Spells;
