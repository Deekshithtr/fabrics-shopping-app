import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/home';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
    
    <Home />
    {<Routes />}
    </div>
  );
}

export default App;
