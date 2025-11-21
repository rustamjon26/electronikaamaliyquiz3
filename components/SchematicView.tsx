import React from 'react';
import { CircuitPuzzle } from '../types/puzzle';
import { motion } from 'framer-motion';

interface SchematicProps {
  puzzle: CircuitPuzzle;
  isCorrect: boolean | null;
}

export const SchematicView: React.FC<SchematicProps> = ({ puzzle, isCorrect }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-navy-950 rounded-xl border-2 border-slate-800 overflow-hidden group shadow-inner">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* SVG Container */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <div 
          className="w-full h-full max-w-[600px] [&_text]:select-none"
          dangerouslySetInnerHTML={{ __html: puzzle.svg }}
        />
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-[20%] animate-scan opacity-30" />

      {/* Status Overlay */}
      {isCorrect === true && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-green-500/10 flex items-center justify-center backdrop-blur-[2px]"
        >
          <div className="text-green-400 font-mono text-4xl font-bold border-4 border-green-400 p-4 rounded rotate-[-10deg] shadow-neon-green">
            SOLVED
          </div>
        </motion.div>
      )}
      
      <div className="absolute top-4 right-4">
         <span className={`px-2 py-1 rounded text-xs font-bold uppercase border ${
           puzzle.difficulty === 'easy' ? 'border-green-500 text-green-500' :
           puzzle.difficulty === 'medium' ? 'border-yellow-500 text-yellow-500' :
           'border-red-500 text-red-500'
         }`}>
           {puzzle.difficulty}
         </span>
      </div>
      
      <div className="absolute bottom-2 left-4 text-slate-600 text-xs font-mono">
        ID: #{puzzle.id.toString().padStart(4, '0')} // {puzzle.topic}
      </div>
    </div>
  );
};
