import { GameStats } from "../types/puzzle";

export const checkAnswer = (selectedIndex: number, correctIndex: number): boolean => {
  return selectedIndex === correctIndex;
};

export const updateStats = (currentStats: GameStats, isCorrect: boolean): GameStats => {
  const newStats = { ...currentStats };
  
  if (isCorrect) {
    newStats.correct += 1;
    newStats.streak += 1;
    // XP Calculation: Base 100 + Streak bonus
    newStats.xp += 100 + (newStats.streak * 10); 
  } else {
    newStats.wrong += 1;
    newStats.streak = 0;
  }
  
  return newStats;
};

export const calculateAccuracy = (correct: number, wrong: number): number => {
  const total = correct + wrong;
  if (total === 0) return 100;
  return Math.round((correct / total) * 100);
};
