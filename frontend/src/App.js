import React, { useState, useEffect } from "react";
import "@/App.css";
import StartScreen from "./components/StartScreen";
import MainMenu from "./components/MainMenu";
import CharacterStats from "./components/CharacterStats";
import LevelSelect from "./components/LevelSelect";
import LoreLog from "./components/LoreLog";
import Certificates from "./components/Certificates";
import Credits from "./components/Credits";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'menu', 'stats', 'levels', 'lore', 'certificates', 'credits'
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ESC key functionality
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (gameState === 'menu') {
          handleTransition('start');
        } else if (gameState !== 'start') {
          handleTransition('menu');
        }
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [gameState]);

  const handleTransition = (newState) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setGameState(newState);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStart = () => {
    handleTransition('menu');
  };

  const handleSelectMenu = (action) => {
    handleTransition(action);
  };

  const handleBack = () => {
    handleTransition('menu');
  };

  return (
    <div className="App" style={{ cursor: 'none' }}>
      <ParticleBackground />
      <CustomCursor />
      
      <PageTransition isTransitioning={isTransitioning}>
        {gameState === 'start' && <StartScreen onStart={handleStart} />}
        {gameState === 'menu' && <MainMenu onSelectMenu={handleSelectMenu} />}
        {gameState === 'stats' && <CharacterStats onClose={handleBack} />}
        {gameState === 'levels' && <LevelSelect onClose={handleBack} />}
        {gameState === 'lore' && <LoreLog onClose={handleBack} />}
        {gameState === 'certificates' && <Certificates onClose={handleBack} />}
        {gameState === 'credits' && <Credits onClose={handleBack} />}
      </PageTransition>
    </div>
  );
}

export default App;
