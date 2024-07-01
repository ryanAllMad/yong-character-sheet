import * as React from 'react';
import { MyHead } from '@/components/MyHead';
import { Grid, Fab } from '@mui/material';
import type { Metadata } from 'next';
import { Navigation } from '@mui/icons-material';
import MyAppBar from '../../components/MyAppBar';
import Wrapper from '../../components/Wrapper';
import LayoutContainer from '@/components/LayoutContainer';
import Spells from '../../components/Spells';
import SpellDetails from '@/components/SpellDetails';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import TOC from '@/components/TOC';
import data from '../../../public/yong.json';

export const metadata: Metadata = {
	title: 'Yong of Artimel: spells',
	description: 'Created with Love, Ryan Duer',
};

export default function Spellbook() {
	const { items } = data;
	
	const cantrips = items.filter(
		(i) => i.type === 'spell' && i.system.level === 0
	);
	const spellsLOne = items.filter(
		(i) => i.type === 'spell' && i.system.level === 1
	);
	const spellsLTwo = items.filter(
		(i) => i.type === 'spell' && i.system.level === 2
	);
	const spellsLThree = items.filter(
		(i) => i.type === 'spell' && i.system.level === 3
	);


	return (
		<>
			<html lang='en'>
				<MyHead title='spellbook' />
				<body>
					<header aria-label='app navigation'>
						<MyAppBar>
							<></>
						</MyAppBar>
					</header>
					<main
						id='content'
						className={`spellbook`}
					>
						<Wrapper>
							<TOC />
							<LayoutContainer>
								<Grid
									item
									xs={12}
									md={12}
									paddingBottom="2em"
								>
									<Heading
										variant='h2'
										id='cantrips'
										headingChildren='Cantrips'
										gutterBottom
									/>
								</Grid>
								{cantrips.map((sp) => (
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
								<Grid
									item
									xs={12}
									md={12}
									paddingBottom="2em"
								>
									<Heading
										variant='h2'
										id='one'
										headingChildren='Level One'
										gutterBottom
									/>
								</Grid>
								{spellsLOne.map((sp) => (
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
								<Grid
									item
									xs={12}
									md={12}
									paddingBottom="2em"
								>
									<Heading
										variant='h2'
										id='two'
										headingChildren='Level Two'
										gutterBottom
									/>
								</Grid>
								{spellsLTwo.map((sp) => (
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
								<Grid
									item
									xs={12}
									md={12}
									paddingBottom="2em"
								>
									<Heading
										variant='h2'
										id='three'
										headingChildren='Level Three'
										gutterBottom
									/>
								</Grid>
								{spellsLThree.map((sp) => (
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
							</LayoutContainer>
						</Wrapper>
					</main>
					<Footer />
					<Fab
						color='primary'
						href='#top'
						variant='extended'
						sx={{
							position: 'fixed',
							bottom: 16,
							right: 16,
							':hover': { color: '#fff' },
						}}
					>
						<Navigation /> Back to top
					</Fab>
				</body>
			</html>
		</>
	);
}
