import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(500000);

	const incrementAge = useCallback(() => {
		setAge(age + 1);
	}, [age]);
	const incrementSalary = useCallback(() => {
		setSalary(salary + 100000);
	}, [salary]);

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	);
}

export default ParentComponent;

// intially wen we click on increment agr or salary , it re renders all the components.
// So we need to optimize it .

// react.Memo :HOC.
// it prevent functional component to rerender, when porps or state is not changed

// even after adding memo.button of increment salary component is re rendering.
