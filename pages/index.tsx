import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
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
		</>
	);
}
