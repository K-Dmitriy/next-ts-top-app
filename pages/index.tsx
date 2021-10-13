import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">Text</Htag>
			<P>asdasdav adfa sda as da d sd asd addasdasdasdasd sdasdas</P>
			<P size="s">asdasdav adfa sda as da d sd asd addasdasdasdasd sdasdas</P>
			<P size="l">asdasdav adfa sda as da d sd asd addasdasdasdasd sdasdas</P>
			<Button appearance="primary" arrow="down">
				Узнать
			</Button>
			<Button appearance="ghost" arrow="right">
				Узнать
			</Button>
			<Tag size="m" color="green">
				QWE
			</Tag>
			<Tag href="!#">QWE</Tag>
			<Tag color="grey">QWE</Tag>
			<Tag href="!#" size="m" color="primary">
				QWE
			</Tag>
			<Tag color="red">QWE</Tag>
			<Rating isEditable rating={rating} setRating={setRating} />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
