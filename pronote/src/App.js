import React from 'react'
import './App.css';
import Editor from './components/Editor'
import Sample from './components/sample';
function App() {
  return (
    <div className="App">
      <Editor name="likith" age='20'/>
    </div>
  );
}

export default App;
