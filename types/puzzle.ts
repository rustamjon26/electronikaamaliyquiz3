export interface CircuitPuzzle {
  id: number;
  title: string;
  topic: string;
  difficulty: string;
  image: string; // svg emas, PNG
  faultOptions: string[];
  correctIndex: number;
  explanation: string;
}

export interface GameStats {
  correct: number;
  wrong: number;
  streak: number;
  xp: number;
  solvedIds: number[];
}
