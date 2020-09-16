import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    document.title= `You CLicked ${count} times`
  })
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
		</div>
	);
}

export default HookCounterOne;

// in useEffect we are requesting react to run this function that we passed in 
// useEffect everytime when the component renders.

// ie. useEffect run after every render.