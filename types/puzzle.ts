export interface CircuitPuzzle {
  id: number;
  svg: string; // Raw SVG string content
  topic: "BJT" | "FET" | "OpAmp" | "Amplifier" | "Digital" | "Power";
  difficulty: "easy" | "medium" | "hard";
  faultOptions: string[];
  correctIndex: number;
  explanation: string;
  title: string;
}

export interface GameStats {
  correct: number;
  wrong: number;
  streak: number;
  xp: number;
  solvedIds: number[];
}
