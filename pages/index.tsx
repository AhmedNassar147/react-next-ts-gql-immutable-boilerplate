import { NextPage } from 'next';
import TodoCreator from '../components/TodosCreator';

interface Props {
	name: string
}

const Home: NextPage<Props> = ({ name }) => {
	
	return (
		<div>
			<p>{name}</p>
			
				<TodoCreator />
		</div>
	);
}

Home.getInitialProps = async () => {

	return {
		name: "ahmed nassar"
	}
}

export default Home;
