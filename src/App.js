import logo from './logo.svg';
import './App.css';
import React from 'react'
import Game, { GameContext } from './Game';
import MyGame from './myGame';
const game = new Game();


function App() {

  return (
    <GameContext.Provider value={game}>
      <div className="App">
      <MyGame />
      </div>
    </GameContext.Provider>
  );
}

export default App;
