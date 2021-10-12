import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { Layout } from '../layout/Layout';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<Layout>
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
		</Layout>
	);
}
