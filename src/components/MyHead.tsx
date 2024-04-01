import Head from 'next/head';

interface MyHead {
	title: string;
}
export const MyHead = (props: MyHead) => {
	const { title } = props;
	return (
		<Head>
			<title>{`Yong of artimel: ${title}`}</title>
		</Head>
	);
};
