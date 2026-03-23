import React, { useState, useEffect } from "react";
import "@/App.css";
import StartScreen from "./components/StartScreen";
import MainMenu from "./components/MainMenu";
import CharacterStats from "./components/CharacterStats";
import LevelSelect from "./components/LevelSelect";
import LoreLog from "./components/LoreLog";
import Certificates from "./components/Certificates";
import Credits from "./components/Credits";

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'menu', 'stats', 'levels', 'lore', 'certificates', 'credits'

  // ESC key functionality
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (gameState === 'menu') {
          setGameState('start');
        } else if (gameState !== 'start') {
          setGameState('menu');
        }
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [gameState]);

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
      case 'certificates':
        setGameState('certificates');
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
      {gameState === 'certificates' && <Certificates onClose={handleBack} />}
      {gameState === 'credits' && <Credits onClose={handleBack} />}
    </div>
  );
}

export default App;
