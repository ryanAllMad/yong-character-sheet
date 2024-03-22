import Layout from "./Layout";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";

const Footer = () => {
	return (
		<footer>
			<Layout columnOne={<FooterOne /> } columnTwo={<FooterTwo />} />
		</footer>
	)
}
export default Footer