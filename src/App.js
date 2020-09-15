import React from 'react';
import './App.css';
import HookCounter from './Hooks/Component/HookCounter';

function App() {
  return (
    <div className="App">
      <HookCounter/>
    </div>
  );
}

export default App;
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