import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface AnswerPanelProps {
  options: string[];
  selectedOption: number | null;
  onSelect: (index: number) => void;
  onSubmit: () => void;
  isAnswered: boolean;
  isCorrect: boolean | null;
  correctIndex: number;
}

export const AnswerPanel: React.FC<AnswerPanelProps> = ({ 
  options, 
  selectedOption, 
  onSelect, 
  onSubmit, 
  isAnswered,
  isCorrect,
  correctIndex
}) => {
  return (
    <div className="w-full md:w-96 bg-navy-900 p-6 border-l border-slate-800 flex flex-col gap-4 shadow-xl z-20">
      <h3 className="text-neon-cyan font-mono text-lg mb-2 border-b border-slate-700 pb-2">
        Diagnostic Options
      </h3>
      
      <div className="flex flex-col gap-3 flex-grow overflow-y-auto">
        {options.map((option, index) => {
          // Determine state styles
          let borderClass = "border-slate-700 hover:border-neon-cyan text-slate-300";
          
          if (selectedOption === index && !isAnswered) {
            borderClass = "border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-neon-cyan";
          }

          // After submission feedback
          if (isAnswered) {
             if (index === correctIndex) {
               borderClass = "border-green-500 bg-green-500/20 text-green-400 shadow-neon-green";
             } else if (index === selectedOption && index !== correctIndex) {
               borderClass = "border-red-500 bg-red-500/20 text-red-400 shadow-neon-red";
             } else {
               borderClass = "border-slate-800 text-slate-600 opacity-50";
             }
          }

          return (
            <motion.button
              key={index}
              whileHover={!isAnswered ? { scale: 1.02, x: 5 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
              onClick={() => !isAnswered && onSelect(index)}
              className={clsx(
                "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 relative overflow-hidden group",
                borderClass
              )}
              disabled={isAnswered}
            >
              <span className="relative z-10 font-mono text-sm">{option}</span>
              {!isAnswered && selectedOption === index && (
                 <div className="absolute inset-0 bg-neon-cyan/5 animate-pulse" />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-4">
        <button
          onClick={onSubmit}
          disabled={selectedOption === null || isAnswered}
          className={clsx(
            "w-full py-3 px-6 rounded font-bold uppercase tracking-wider transition-all duration-300",
            selectedOption !== null && !isAnswered
              ? "bg-neon-cyan text-navy-950 shadow-neon-cyan hover:bg-white"
              : "bg-navy-800 text-slate-500 cursor-not-allowed"
          )}
        >
          Tasdiqlash
        </button>
        
        {isAnswered && !isCorrect && (
          <div className="mt-3 text-center animate-pulse-fast">
            <span className="text-red-500 font-mono uppercase">Fault Mismatch detected</span>
          </div>
        )}
      </div>
    </div>
  );
};
