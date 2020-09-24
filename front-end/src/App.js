import React from 'react';
import './App.css';
import Routes from './Routes';
import BeerProvider from './Context/BeerContext/BeerProvider';

function App() {
  return (
    <div className="App">
      <BeerProvider>
        <Routes />
      </BeerProvider>
    </div>
  );
}

export default App;
