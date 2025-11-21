import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CircuitPuzzle } from '../types/puzzle';

interface ModalProps {
  isOpen: boolean;
  puzzle: CircuitPuzzle;
  onNext: () => void;
}

export const ExplanationModal: React.FC<ModalProps> = ({ isOpen, puzzle, onNext }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-2xl bg-navy-900 border-2 border-neon-green rounded-xl p-1 shadow-[0_0_50px_rgba(57,255,20,0.15)] overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="text-neon-green w-12 h-12" />
                <div>
                  <h2 className="text-3xl font-bold text-white text-shadow-green">To‘g‘ri topdingiz!</h2>
                  <p className="text-neon-green font-mono">Fault Isolated Successfully</p>
                </div>
              </div>

              <div className="bg-navy-950 p-6 rounded-lg border border-slate-800 mb-8">
                <h3 className="text-neon-cyan font-mono mb-2 text-sm uppercase">Technical Analysis:</h3>
                <p className="text-slate-300 leading-relaxed">
                  {puzzle.explanation}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={onNext}
                  className="flex items-center gap-2 bg-neon-green text-navy-950 font-bold py-3 px-8 rounded hover:bg-white transition-colors shadow-neon-green"
                >
                  Keyingi Puzzle <ArrowRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Decorative Line */}
            <div className="h-1 w-full bg-gradient-to-r from-neon-green to-transparent absolute bottom-0 left-0" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
