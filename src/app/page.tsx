import Wrapper from '../components/Wrapper';
import type { Metadata } from "next";
import Profile from '../components/Profile';
import MyAppBar from '../components/MyAppBar';
import Layout from '../components/Layout';
import Abilities from '@/components/Abilities';
import CharacterBuild from '@/components/CharacterBuild';
import { MyHead } from '@/components/MyHead';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: "Yong of Artimel: about",
	description: "Created with Love, Ryan Duer",
};

export default function Home() {
	return (
		<>
		<html lang="en">
			<MyHead title="about" />
			<body>
			<header aria-label='app navigation'>
				<MyAppBar>
					<></>
				</MyAppBar>
			</header>
			<main id="content" className='home'>
				<Wrapper>
					<Profile src='/yong.webp' pageHeading="About" />
					<Layout
						columnOne={<Abilities />}
						columnTwo={<CharacterBuild />}
					/>
				</Wrapper>
			</main>
			<Footer />
			</body>
			</html>
		</>
	);
}
