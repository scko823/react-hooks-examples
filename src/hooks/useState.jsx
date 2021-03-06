import React, { useState } from 'react';

const UseStateExample = () => {
	const [count, setCount] = useState(0);
	const incCount = () => setCount(currConut => currConut + 1);
	const decCount = () => setCount(currConut => (currConut <= 0 ? 0 : currConut - 1));
	return (
		<>
			<h1>use state</h1>
			<div>
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
