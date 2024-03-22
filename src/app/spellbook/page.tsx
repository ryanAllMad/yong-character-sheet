import AppBar from '../../components/MyAppBar'
import Wrapper from '../../components/Wrapper';
import Profile from '../../components/Profile';
import Layout from '../../components/Layout';
import Spells from '../../components/Spells'
import SpellDetails from '@/components/SpellDetails';
import data from '../../../public/yong.json'


export default function Spellbook() {

	const { items } = data;
	const spells = items.filter((i) => i.type === 'spell');
	
	return (
		<main className={`spellbook`}>
			<Wrapper>
				<AppBar />
				<Profile src='/yong.webp' />
				<Layout columnOne={
					spells.map((s) => <Spells key={s._id} imageSource={`/spell-images/${s.img.replace(/icons\/(\w+)\/(\w+)\//g, '')}`} name={s.name} />)
					} columnTwo={<SpellDetails />} />
			</Wrapper>
		</main>
	);
}
