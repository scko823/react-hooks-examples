import React, { useReducer } from 'react';

const init = initCount => {
	return {
		count: initCount,
		isDecAllowed: initCount > 0 ? true : false
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INC':
			return { ...state, count: state.count + 1, isDecAllowed: true };
		case 'DEC':
			const newState = {
				count: state.count > 0 ? state.count - 1 : 0
			};
			newState.isDecAllowed = newState.count > 0;
			return newState;
		case 'RESET':
			return { ...state, count: action.payload || 0, isDecAllowed: false };
		default:
			return state;
	}
};

export default ({ initCount }) => {
	const [state, dispatch] = useReducer(reducer, initCount, init);
	return (
		<>
			<h1>use reducer</h1>
			<div>current state is: {JSON.stringify(state, null, 4)}</div>
			<div>
				<button onClick={() => dispatch({ type: 'INC' })}>+</button>
				<button disabled={!state.isDecAllowed} onClick={() => dispatch({ type: 'DEC' })}>
					-
				</button>
				<button onClick={() => dispatch({ type: 'RESET', payload: initCount })}>
					RESET COUNTER
				</button>
			</div>
		</>
	);
};
