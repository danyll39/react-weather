import React from 'react'
import { GithubState } from "./context/GithubContext"
import Hero from './components/Hero'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <GithubState>
      <Router>
        < Hero />
      </Router>
    </GithubState>
  );
}

export default App;
