import React from 'react';
import './App.css';
import HookCounterTwo from './Hooks/useState/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterTwo/>
    </div>
  );
}

export default App;
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