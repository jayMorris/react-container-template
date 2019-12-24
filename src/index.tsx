import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(props) {
	console.log(process.env.cool);
	return <div>Helloh great hui done hello sure kl jj</div>;
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	// <Hello compiler="TypeScript" framework="React" />,
	// document.getElementById("root")
);
