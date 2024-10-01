import { useState } from 'react'
import './App.css'
import Button from './Button'

function doSomething(){
  console.log("Button Was Clicked")
}

function App() {
  return (
    <div><Button/></div>
  )
}

export default App
