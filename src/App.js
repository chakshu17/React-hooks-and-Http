import React from 'react';
import './App.css';
import HookCounterOne from './Hooks/useEffect/HookCounterOne';
function App() {
  return (
    <div className="App">
   
    <HookCounterOne/>
    </div>
  );
}

export default App;
//UseEffect






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