import React, { useReducer, useEffect, useRef } from 'react';
import fetch from 'node-fetch';
const API_URL = 'https://api.github.com/search/users';

const init = () => {
	return {
		loading: false,
		result: null,
		inputText: '',
		submitCount: 0
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'API_CALL_PENDING':
			return {
				...state,
				loading: true,
				inputText: action.payload,
				submitCount: state.submitCount + 1
			};
		case 'API_CALL_SUCCESS':
			return {
				...state,
				loading: false,
				result: action.payload
			};
		default:
			return state;
	}
};

const GitHubExample = props => {
	const [state, dispatch] = useReducer(reducer, undefined, init);
	const inputEl = useRef(null);
	useEffect(() => {
		if (!state.inputText) {
			return;
		}
		fetch(API_URL + '?q=' + state.inputText, {
			headers: { 'Content-Type': 'application/json' }
		})
			.then(res => res.json())
			.then(r => {
				dispatch({ type: 'API_CALL_SUCCESS', payload: r });
			});
	}, [state.inputText]);
	return (
		<>
			<h1>SHOUT!</h1>
			<div>
				<div>
					<pre>{JSON.stringify(state, null, 4)}</pre>
				</div>
				<div>
					<form
						onSubmit={e => {
							e.preventDefault();
							dispatch({
								type: 'API_CALL_PENDING',
								payload: inputEl.current.value
							});
						}}
					>
						<input ref={inputEl} type="text" />
						<button type="submit">submit</button>
						{state.loading && <p>loading...</p>}
					</form>
				</div>
			</div>
		</>
	);
};

export default GitHubExample;
