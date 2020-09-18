import React from "react";
import "./App.css";
import ComponentC from "./Hooks/useContext/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={"Chakshu"}>
				<ChannelContext.Provider value={"Demon King"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
// UseContext
// context provides a way to pass data through component tree without
// having to pass props down manually at every level
// Example for simple transfer of data to F component from App:

// <UserContext.Provider value={"Chakshu"}>
// <ChannelContext.Provider value={"Demon King"}>
// 	<ComponentC />
// </ChannelContext.Provider>
// </UserContext.Provider>

// data fetching
// <Datafetching/>

// data fetching with specific id
// 	<DataFecthingInput/>

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
