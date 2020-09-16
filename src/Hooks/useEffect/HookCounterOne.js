import React, { useEffect, useState } from "react";

function HookCounterOne() {
	const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  
	useEffect(() => {
		console.log("UseEffect updating hooks Copuunter");
		document.title = `You CLicked ${count} times`;
  },[count]);
  // second parameter is ,to conditionally run useEffect
  // if array of values doest not change, so it does not run 
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
		</div>
	);
}

export default HookCounterOne;

// in useEffect we are requesting react to run this function that we passed in
// useEffect everytime when the component renders.

// ie. useEffect run after every render.
