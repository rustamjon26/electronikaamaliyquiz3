import React from 'react';
import { CircuitBoard, Zap, Trophy, Activity } from 'lucide-react';
import { GameStats } from '../types/puzzle';
import { calculateAccuracy } from '../logic/validator';

interface HeaderProps {
  stats: GameStats;
  currentLevel: number;
}

export const HeaderBar: React.FC<HeaderProps> = ({ stats, currentLevel }) => {
  return (
    <header className="w-full bg-navy-900 border-b border-neon-cyan/30 p-4 flex flex-col md:flex-row justify-between items-center shadow-[0_1px_10px_rgba(0,229,255,0.1)] relative z-10">
      
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <div className="p-2 bg-navy-800 rounded-lg border border-neon-cyan shadow-neon-cyan">
          <CircuitBoard className="text-neon-cyan w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-wider font-mono uppercase text-glow">
            Circuit Fault Detective
          </h1>
          <p className="text-xs text-neon-cyan/70">System Status: ONLINE</p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm font-mono">
        <div className="flex items-center gap-2 text-neon-magenta">
          <Zap className="w-4 h-4" />
          <span>XP: {stats.xp}</span>
        </div>

        <div className="flex items-center gap-2 text-neon-green">
          <Trophy className="w-4 h-4" />
          <span>Streak: {stats.streak}</span>
        </div>

        <div className="flex items-center gap-2 text-blue-400">
          <Activity className="w-4 h-4" />
          <span>Acc: {calculateAccuracy(stats.correct, stats.wrong)}%</span>
        </div>

        <div className="px-3 py-1 bg-navy-800 rounded border border-slate-700 text-slate-300">
          Level {currentLevel}
        </div>
      </div>
    </header>
  );
};
