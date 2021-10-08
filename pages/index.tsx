import { Button, Htag, P } from '../components';

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
		</>
	);
}
