import Wrapper from '../components/Wrapper';
import Profile from '../components/Profile';
import MyAppBar from '../components/MyAppBar';
import Layout from '../components/Layout';
import Abilities from '@/components/Abilities';
import CharacterBuild from '@/components/CharacterBuild';

export default function Home() {
	return (
		<>
			<header>
				<MyAppBar />
			</header>
			<main className='home'>
				<Wrapper>
					<Profile src='/yong.webp' />
					<Layout
						columnOne={<Abilities />}
						columnTwo={<CharacterBuild />}
					/>
				</Wrapper>
			</main>
		</>
	);
}
