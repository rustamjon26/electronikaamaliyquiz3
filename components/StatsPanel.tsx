import React from 'react';
import { CheckCircle2, XCircle, Cpu } from 'lucide-react';
import { GameStats } from '../types/puzzle';

interface StatsPanelProps {
  stats: GameStats;
  totalPuzzles: number;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ stats, totalPuzzles }) => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-navy-900/50 border-r border-slate-800 p-6 gap-6 backdrop-blur-sm">
      <h2 className="text-neon-cyan font-bold tracking-widest uppercase text-sm border-b border-slate-800 pb-2">
        Mission Stats
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-navy-800/50 rounded border border-green-900/50">
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle2 size={18} />
            <span>Correct</span>
          </div>
          <span className="font-mono text-xl font-bold">{stats.correct}</span>
        </div>

        <div className="flex justify-between items-center p-3 bg-navy-800/50 rounded border border-red-900/50">
          <div className="flex items-center gap-2 text-red-400">
            <XCircle size={18} />
            <span>Wrong</span>
          </div>
          <span className="font-mono text-xl font-bold">{stats.wrong}</span>
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="text-slate-400 text-xs uppercase mb-2">Progress</h3>
        <div className="w-full bg-navy-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-neon-cyan h-full shadow-[0_0_10px_#00E5FF]"
            style={{ width: `${(stats.solvedIds.length / totalPuzzles) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-1 font-mono">
          <span>{stats.solvedIds.length} Solved</span>
          <span>{totalPuzzles} Total</span>
        </div>
      </div>
      
      <div className="p-4 bg-navy-950 border border-slate-800 rounded flex flex-col items-center text-center opacity-70">
        <Cpu className="text-slate-600 mb-2" />
        <span className="text-xs text-slate-500">Analysis Module Active</span>
      </div>
    </div>
  );
};
