import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

	const [value, setValue] = useState<number>(0);

	useEffect(() => {
		const valueAsString = localStorage.getItem('counterValue')
		console.log(typeof valueAsString)
		if (typeof valueAsString ==='string' && valueAsString !== '0') {
			console.log(true)
			let newValue = JSON.parse(valueAsString)
			setValue(newValue)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('counterValue', JSON.stringify(value));
	}, [value]);

	const incHandler = () => {
		setValue(value + 1);
	};

	const decHandler = () => {
		setValue(value - 1);
	}

	return (
		<div className="App">
      		<h1>{value}</h1>
      		<button onClick={incHandler}>inc</button>
			<button onClick={decHandler}>dec</button>
    	</div>
	);
}

export default App;
