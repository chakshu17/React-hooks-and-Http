import React from "react";
import "./App.css";
import IntervalClassCounter from "./Hooks/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./Hooks/useEffect/IntervalHookCounter";
import MouseContainer from "./Hooks/useEffect/MouseContainer";
function App() {
	return (
		<div className="App">
      <IntervalClassCounter/>
	<IntervalHookCounter/>
		</div>
	);
}

export default App;
//UseEffect

//1. <HookCounterOne/>
//2. useEffect only once: <HookMouse/>
//3. useEffect with Cleanup: <MouseContainer/>
//4. useEffect with incorrrect dependency:  	<IntervalHookCounter/>

//useState with array:       <HookCounterFour/>

// <HookCounterThree/>
// useState with object: ...name, like this,Spread operator,
// this means that all the object , data is passed but only one is edited which is mentioned after it.
// acc to condition

//UseState
//  <HookCounterTwo/>

// when you have to update the value regarding the previous state , always
// use function like HookCOunterTwo: increment 5

//  Use hooks at top level:don't use it in loops, nested funtions or condirtions
//  Onlycall hooks from react Function

//functional hooks
//     <HookCounter/>

//class hooks
//  <ClassCounter/>

// Get request:
// <PostList/>
// Post request:
// <PostForm/>
