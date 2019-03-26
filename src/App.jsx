import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as Hooks from './hooks';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<nav className="Nav">
							<ul>
								<li>
									<Link to="/use-state">useState</Link>
								</li>
								<li>
									<Link to="/use-effect">useEffect</Link>
								</li>
								<li>
									<Link to="">useContext</Link>
								</li>
								<li>
									<Link to="">useReducer</Link>
								</li>
								<li>
									<Link to="">useCallback</Link>
								</li>
								<li>
									<Link to="">useMemo</Link>
								</li>
								<li>
									<Link to="">useRef</Link>
								</li>
								<li>
									<Link to="">useImperativeHandle</Link>
								</li>
								<li>
									<Link to="">useLayoutEffect</Link>
								</li>
								<li>
									<Link to="">useDebugValue</Link>
								</li>
							</ul>
						</nav>
					</header>
					<div className="Content">
						<Route path="/use-state" component={Hooks.useState} />
						<Route path="/use-effect" component={Hooks.useEffect} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
