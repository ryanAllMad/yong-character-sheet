import Wrapper from '../components/Wrapper';
import Profile from '../components/Profile';
import MyAppBar from '../components/MyAppBar';
import Layout from '../components/Layout';
import Abilities from '@/components/Abilities';
import CharacterBuild from '@/components/CharacterBuild';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<header>
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
		</>
	);
}
