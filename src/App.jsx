import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'

function App() {

  return (
    <div className="App">
      <Counter name="腕立て伏せ" />
      <Counter name="腹筋" />
      <Counter name="スクワット" />
    </div>
  )
}

export default App
