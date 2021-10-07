import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Text</Htag>
			<Button appearance="primary">Узнать</Button>
			<Button appearance="ghost">Узнать</Button>
		</>
	);
}
