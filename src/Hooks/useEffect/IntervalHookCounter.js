import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
  const [count,setCount]= useState(0)
  // const someProp='asbsba'
  const tick = ()=>{
    setCount(prevCount=>prevCount+1)
    // setCount(count+1)
  }
 
  useEffect(()=>{
    // function doSomething(){
    //   console.log(someProp);
    // }
    const interval = setInterval(tick,1000)
    return ()=>{
      clearInterval(interval) 
    }
  },[]) // [count]........ either try thisi.e pass var in dependency array 
  // or that i.e use prev State method
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
