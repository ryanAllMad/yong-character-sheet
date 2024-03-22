import * as React from 'react';
import { Grid } from '@mui/material';
import MyAppBar from '../../components/MyAppBar';
import Wrapper from '../../components/Wrapper';
import Profile from '../../components/Profile';
import Spells from '../../components/Spells';
import SpellDetails from '@/components/SpellDetails';
import data from '../../../public/yong.json';

export default function Spellbook() {
	const { items } = data;
	const spells = items.filter((i) => i.type === 'spell');

	return (
		<>
			<header>
				<MyAppBar />
			</header>
			<main className={`spellbook`}>
				<Wrapper>
					<Profile src='/yong.webp' />
					<Grid
						container
						spacing={4}
						alignItems='flex-start'
						className='layout-container'
						sx={{
							backgroundColor: '#ffffff',
							padding: '2em',
							width: `100%`,
							margin: 0,
						}}
					>
						{spells.map((sp) => (
							<React.Fragment key={sp._id}>
								<Spells
									imageSource={`/spell-images/${sp.img.replace(
										/icons\/(\w+)\/(\w+)\//g,
										''
									)}`}
									name={sp.name}
								/>
								<SpellDetails
									name={sp.name}
									description={`${sp.system.description.value}`}
								/>
							</React.Fragment>
						))}
					</Grid>
				</Wrapper>
			</main>
		</>
	);
}
