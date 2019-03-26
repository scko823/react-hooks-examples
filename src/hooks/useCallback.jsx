import React, { useCallback, useState } from 'react';

const fib = n => {
	if (n <= 2) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
};

const N = new Array(20).fill('').map((_, i) => i + 10);
const useCallbackExample = () => {
	const [n, setN] = useState(10);
	const [fibResult, setFibResult] = useState(fib(10));
	const memoFib = useCallback(newN => {
		setN(newN);
		setFibResult(fib(newN));
	});
	return (
		<>
			<h1>use callback</h1>
			<div>
				Fib result for n = {n} is {fibResult}
			</div>
			<div>
				<select
					onChange={({ target }) => {
						memoFib(target.value);
					}}
					value={n}
				>
					{N.map(n => (
						<option key={n} value={n}>
							{n}
						</option>
					))}
				</select>
				<div>n is {n}</div>
			</div>
		</>
	);
};

export default useCallbackExample;
