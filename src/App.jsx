import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as Hooks from './hooks';
import './App.css';

export const TextAlignContext = createContext('left');
class App extends Component {
	state = {
		textAlign: 'left'
	};
	chnageTextAlign = () => {
		this.setState(({ textAlign }) => {
			const newState =
				textAlign === 'left' ? 'center' : textAlign === 'center' ? 'right' : 'left';
			return { textAlign: newState };
		});
	};
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
									<Link to="/use-context">useContext</Link>
								</li>
								<li>
									<Link to="/use-reducer">useReducer</Link>
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
					<TextAlignContext.Provider value={this.state.textAlign}>
						<TextAlignContext.Consumer>
							{value => {
								return (
									<div className="Content" style={{ textAlign: value }}>
										<Route path="/use-state" component={Hooks.useState} />
										<Route path="/use-effect" component={Hooks.useEffect} />
										<Route
											path="/use-context"
											render={props => (
												<Hooks.useContext
													{...props}
													changeTextAlign={this.chnageTextAlign}
												/>
											)}
										/>
										<Route
											path="/use-reducer"
											render={props => (
												<Hooks.useReducer {...props} initCount={6} />
											)}
										/>
									</div>
								);
							}}
						</TextAlignContext.Consumer>
					</TextAlignContext.Provider>
				</div>
			</Router>
		);
	}
}

export default App;
