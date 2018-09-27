import React from 'react'
import ReactDOM from 'react-dom'
import Dictaphone from './Dictaphone'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Studio Speech Recognition Commands</h1>
      <h2>Try it by saying "Studio Turn"</h2>
      <Dictaphone />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
