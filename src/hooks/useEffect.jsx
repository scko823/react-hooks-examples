import React, { useState, useEffect } from 'react';

const UseStateExample = () => {
	const [count, setCount] = useState(0);
	const incCount = () => setCount(currConut => currConut + 1);
	const decCount = () => setCount(currConut => (currConut <= 0 ? 0 : currConut - 1));
	let currentTitle;
	useEffect(() => {
		currentTitle = document.title;
		const changeTitle = setInterval(() => {
			document.title = `${Math.floor(Math.random() * 1000)}`;
		}, 5000);

		return () => {
			document.title = currentTitle;
			clearInterval(changeTitle);
		};
	});
	return (
		<>
			<h1>use effect</h1>
			<div>
				<div>Check out the title of the document</div>
				<div>count: {count}</div>
				<button onClick={incCount}>+</button>
				<button disabled={count <= 0} onClick={decCount}>
					-
				</button>
				<div>
					<button onClick={() => setCount(0)}>reset</button>
				</div>
			</div>
		</>
	);
};

export default UseStateExample;
