import React from "react";
import { CircuitPuzzle } from "../types/puzzle";
import { motion } from "framer-motion";

interface SchematicProps {
  puzzle: CircuitPuzzle;
  isCorrect: boolean | null;
}

export const SchematicView: React.FC<SchematicProps> = ({
  puzzle,
  isCorrect,
}) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-navy-950 rounded-xl border-2 border-slate-800 overflow-hidden group shadow-inner flex items-center justify-center">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Image Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <img
          src={puzzle.image}
          alt={puzzle.title}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_5px_rgba(0,229,255,0.2)]"
        />
      </div>

      {/* Cyberpunk Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-[20%] animate-scan opacity-30 z-20" />

      {/* Status Overlay (When Solved) */}
      {isCorrect === true && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-green-500/10 flex items-center justify-center backdrop-blur-[2px] z-30"
        >
          <div className="text-green-400 font-mono text-4xl font-bold border-4 border-green-400 p-4 rounded rotate-[-10deg] shadow-neon-green bg-navy-950/80">
            SOLVED
          </div>
        </motion.div>
      )}

      {/* Difficulty Badge (Top Right) */}
      <div className="absolute top-4 right-4 z-30">
        <span
          className={`px-2 py-1 rounded text-xs font-bold uppercase border bg-navy-950/80 ${
            puzzle.difficulty === "easy"
              ? "border-green-500 text-green-500 shadow-[0_0_5px_rgba(34,197,94,0.4)]"
              : puzzle.difficulty === "medium"
              ? "border-yellow-500 text-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.4)]"
              : "border-red-500 text-red-500 shadow-[0_0_5px_rgba(239,68,68,0.4)]"
          }`}
        >
          {puzzle.difficulty}
        </span>
      </div>

      {/* Puzzle ID Info (Bottom Left) */}
      <div className="absolute bottom-2 left-4 text-slate-500 text-xs font-mono z-30 bg-navy-950/50 px-2 rounded">
        ID: #{puzzle.id.toString().padStart(4, "0")} // {puzzle.topic}
      </div>
    </div>
  );
};
