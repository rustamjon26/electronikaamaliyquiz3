import React, { useState, useMemo } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { StatsPanel } from './components/StatsPanel';
import { SchematicView } from './components/SchematicView';
import { AnswerPanel } from './components/AnswerPanel';
import { ExplanationModal } from './components/ExplanationModal';
import { puzzles } from './data/faults';
import { checkAnswer, updateStats } from './logic/validator';
import { GameStats } from './types/puzzle';

function App() {
  // -- State --
  const [currentPuzzleId, setCurrentPuzzleId] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const [stats, setStats] = useState<GameStats>({
    correct: 0,
    wrong: 0,
    streak: 0,
    xp: 0,
    solvedIds: []
  });

  // -- Computed --
  const currentPuzzle = puzzles[currentPuzzleId];
  const totalPuzzles = puzzles.length;

  // -- Handlers --
  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;

    const result = checkAnswer(selectedOption, currentPuzzle.correctIndex);
    setIsCorrect(result);
    setIsAnswered(true);
    
    // Update stats immediately
    setStats(prev => {
      const newStats = updateStats(prev, result);
      if (result && !prev.solvedIds.includes(currentPuzzle.id)) {
        newStats.solvedIds = [...prev.solvedIds, currentPuzzle.id];
      }
      return newStats;
    });

    // If correct, show modal after short delay for visual feedback
    if (result) {
      setTimeout(() => setShowExplanation(true), 800);
    } else {
      // If wrong, allow retry logic could go here, but currently just stops
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    
    // Simple cycle for now
    setCurrentPuzzleId((prev) => (prev + 1) % totalPuzzles);
  };

  const handleReplay = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-white overflow-hidden">
      <HeaderBar stats={stats} currentLevel={Math.floor(stats.xp / 500) + 1} />

      <div className="flex flex-grow overflow-hidden">
        <StatsPanel stats={stats} totalPuzzles={totalPuzzles} />

        <main className="flex-grow flex flex-col md:flex-row relative">
          {/* Center Stage */}
          <div className="flex-grow p-4 md:p-8 flex flex-col items-center justify-center relative z-0">
            <div className="w-full max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-white font-mono flex items-center gap-3">
                <span className="text-neon-cyan">#{currentPuzzle.id}</span> 
                {currentPuzzle.title}
              </h2>
              
              <SchematicView puzzle={currentPuzzle} isCorrect={isCorrect} />
              
              {/* Mobile-only Navigation/Feedback if needed underneath */}
              {isAnswered && !isCorrect && (
                <div className="mt-4 flex justify-center">
                   <button 
                     onClick={handleReplay}
                     className="text-neon-cyan underline text-sm font-mono hover:text-white"
                   >
                     Replay this puzzle
                   </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <AnswerPanel 
            options={currentPuzzle.faultOptions}
            selectedOption={selectedOption}
            onSelect={handleSelect}
            onSubmit={handleSubmit}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            correctIndex={currentPuzzle.correctIndex}
          />
        </main>
      </div>

      <ExplanationModal 
        isOpen={showExplanation}
        puzzle={currentPuzzle}
        onNext={handleNext}
      />
    </div>
  );
}

export default App;
