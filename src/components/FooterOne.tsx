import Link from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import InlineBox from './InlineBox';

const FooterOne = () => {
	return (
		<>
			<InlineBox headingChildren='Made By:'>
				Ryan Duer,
				<br />
				<Link
					href='http://allmaddesigns.com'
					target='_blank'
				>
					allmaddesigns.com
					<OpenInNew fontSize='small' />
				</Link>
				<br />
				<Link
					href='https://github.com/ryanAllMad'
					target='_blank'
				>
					Github
					<OpenInNew fontSize='small' />
				</Link>
				<br />
				<Link
					href='https://www.linkedin.com/in/ryan-duer-515342108/'
					target='_blank'
				>
					LinkedIn
					<OpenInNew fontSize='small' />
				</Link>
			</InlineBox>
		</>
	);
};
export default FooterOne;
