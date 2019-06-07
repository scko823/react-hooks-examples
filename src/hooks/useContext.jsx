import React, { useContext } from 'react';

import { TextAlignContext } from '../App.jsx';

export default props => {
	const textAlign = useContext(TextAlignContext);
	return (
		<>
			<h1>use Context</h1>
			<div>current text align is set to: {textAlign}</div>
			<div>
				<button onClick={props.changeTextAlign}>toggle text align value</button>
			</div>
		</>
	);
};
