import React, { useEffect, useState } from 'react'

function HookMouse() {
  const [x,setX]= useState(0)
  const [y,setY]= useState(0)
  const logMousePostion=e=>{
    console.log('Mouse event');
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log('UseEffect called');
    window.addEventListener('mousemove',logMousePostion)

    return()=>{
      console.log('Component UnMounted');
      window.removeEventListener('mousemove',logMousePostion)
    }
  },[])
  return (
    <div>
      Hooks X = {x}  Y = {y}
    </div>
  )
}

export default HookMouse
