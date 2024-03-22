'use client';
import * as React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import data from '../../public/yong.json';
import Heading from './Heading';

const SpellDetails = () => {
	const { items } = data;
	const spells = items.filter((i) => i.type === 'spell');
	return (
		<>
			<List>
				{spells.map((sp) => {
					return (
						<ListItem key={sp._id} sx={{ display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.8', paddingBottom: 0, marginBottom: 16 }}>
							<Heading level='h3' headingChildren={sp.name} />
							<Typography sx={{ fontSize: '18px' }}>
								<span
									dangerouslySetInnerHTML={{
										__html: sp.system.description.value,
									}}
								/>
							</Typography>
						</ListItem>
					);
				})}
			</List>
		</>
	);
};

export default SpellDetails;
