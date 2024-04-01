import * as React from 'react';
import { MyHead } from '@/components/MyHead';
import { Grid } from '@mui/material';
import MyAppBar from '../../components/MyAppBar';
import Wrapper from '../../components/Wrapper';
import type { Metadata } from "next";
import Profile from '../../components/Profile';
import Spells from '../../components/Spells';
import SpellDetails from '@/components/SpellDetails';
import Footer from '@/components/Footer';
import data from '../../../public/yong.json';

export const metadata: Metadata = {
	title: "Yong of Artimel: spells",
	description: "Created with Love, Ryan Duer",
};

export default function Spellbook() {
	const { items } = data;
	const spells = items.filter((i) => i.type === 'spell');

	return (
		<>
		<html lang="en">
			<MyHead title='spellbook' />
			<body>
			<header>
				<MyAppBar>
					<></>
				</MyAppBar>
			</header>
			<main id="content" className={`spellbook`}>
				<Wrapper>
					<Profile src='/yong.webp' pageHeading="Spells" />
					<Grid
						container
						spacing={0}
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
			<Footer />
			</body>
		</html>
		</>
	);
}
