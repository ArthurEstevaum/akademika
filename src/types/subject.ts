export type Subject = {
  name: string;
  quarter: number;
  teacher?: string;
  location?: string;
  syllabus?: string;
  horary: Array<days>;
  state: "cursando" | "aprovado" | "não iniciado";
};

export type days =
  | "Segunda-feira"
  | "Terca-feira"
  | "Quarta-feira"
  | "Quinta-feira"
  | "Sexta-feira"
  | "Sábado";
