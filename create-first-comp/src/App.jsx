import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloButton from './HelloButton'
import Hello from './Hello'
import Random from './Random'

function App() {
  return <div>
      <h1> Hello React World</h1>
      <Hello />
      <HelloButton />
      <Random />
    </div>
}

export default App
