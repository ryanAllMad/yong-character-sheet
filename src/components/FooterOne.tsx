'use client';
import Link from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import InlineBox from './InlineBox';

const FooterOne = () => {
	const theme = useTheme();
	return (
		<>
			<InlineBox
				direction="column"
				align='flex-start'
				display='flex'
				justify='flex-start'
				headingChildren='Made By:'
			>
				Ryan Duer,
				<br />
				<Link
					style={{ color: theme.palette.secondary.dark }}
					href='http://allmaddesigns.com'
					target='_blank'
				>
					allmaddesigns.com
					<OpenInNew fontSize='small' />
				</Link>
				<br />
				<Link
					style={{ color: theme.palette.secondary.dark }}
					href='https://github.com/ryanAllMad'
					target='_blank'
				>
					Github
					<OpenInNew fontSize='small' />
				</Link>
				<br />
				<Link
					style={{ color: theme.palette.secondary.dark }}
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
