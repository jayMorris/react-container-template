import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

function App(props) {
	console.log(process.env.cool);
	return (
		<div>
			Helloh jk jj
			<Button>cool</Button>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	// <Hello compiler="TypeScript" framework="React" />,
	// document.getElementById("root")
);
