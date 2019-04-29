import React from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';
import './App.css';

const AsyncPizza = asyncComponent(() => {
	return import('./containers/Pizza');
});

function App() {
	return (
		<div className='App'>
			<div>
				<Link to='/'>Users</Link> | <Link to='/pizza'>Pizza</Link>
			</div>
			<div>
				<Route to='/' exact component={Users} />
				<Route to='/pizza' component={AsyncPizza} />
			</div>
		</div>
	);
}

export default App;
