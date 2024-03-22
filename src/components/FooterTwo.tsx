import InlineBox from "./InlineBox";
import Link from "next/link";
import { OpenInNew } from '@mui/icons-material';

const FooterTwo = () => {
	return (
		<>
		<InlineBox headingChildren="This project:">
			Passes WCAG 2.2 AA Guidelines.<br />
			<Link href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh" target="_blank">
				Check it out with the WAVE chrome extension!
				<OpenInNew fontSize="small" />
			</Link>
		</InlineBox>
		</>
	)
}
export default FooterTwo