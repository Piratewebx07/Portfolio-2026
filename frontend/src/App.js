import React, { useState } from "react";
import "@/App.css";
import StartScreen from "./components/StartScreen";
import MainMenu from "./components/MainMenu";
import CharacterStats from "./components/CharacterStats";
import LevelSelect from "./components/LevelSelect";
import LoreLog from "./components/LoreLog";
import Credits from "./components/Credits";

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'menu', 'stats', 'levels', 'lore', 'credits'

  const handleStart = () => {
    setGameState('menu');
  };

  const handleSelectMenu = (action) => {
    switch(action) {
      case 'stats':
        setGameState('stats');
        break;
      case 'levels':
        setGameState('levels');
        break;
      case 'lore':
        setGameState('lore');
        break;
      case 'credits':
        setGameState('credits');
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    setGameState('menu');
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      {gameState === 'menu' && <MainMenu onSelectMenu={handleSelectMenu} />}
      {gameState === 'stats' && <CharacterStats onClose={handleBack} />}
      {gameState === 'levels' && <LevelSelect onClose={handleBack} />}
      {gameState === 'lore' && <LoreLog onClose={handleBack} />}
      {gameState === 'credits' && <Credits onClose={handleBack} />}
    </div>
  );
}

export default App;
