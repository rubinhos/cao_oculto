import { shuffle } from "../utils";

export interface PuzzleData {
  question: string;
  revealed: boolean;
}

export const loadPuzzleData = (random = false): PuzzleData[] => {
  const puzzleData: PuzzleData[] = [
    {
      question: "Sem dica, passou a vez",
      revealed: false,
    },
    {
      question: "Participa do -A",
      revealed: false,
    },
    {
      question: "Participante do -A há mais de 5 anos",
      revealed: false,
    },
    {
      question: "É formado(a)",
      revealed: false,
    },
    {
      question: "Integrante -A originals",
      revealed: false,
    },
    {
      question: "Sem dica, passou a vez",
      revealed: false,
    },
    {
      question: "Ganhou um bombom",
      revealed: false,
    },
    {
      question: "Já viajou com outros integrantes do -A",
      revealed: false,
    },
    {
      question: "Já foi para fora do país",
      revealed: false,
    },
    {
      question: "Tem pelo menos um(a) irmão(a)",
      revealed: false,
    },
    {
      question: "Sem dica, passou a vez",
      revealed: false,
    },
    {
      question: "Ganhou um bombom",
      revealed: false,
    },
    {
      question: "Tem 30 anos ou mais",
      revealed: false,
    },
    {
      question: "Fez o L em 2022",
      revealed: false,
    },
    {
      question: "Ganhou um bombom",
      revealed: false,
    },
    {
      question: "Ganhou um bombom",
      revealed: false,
    },
    {
      question: "Sem dica, passou a vez",
      revealed: false,
    },
    {
      question: "Tem animal de estimação em casa",
      revealed: false,
    },
    {
      question: "Sabe tocar um instrumento musical",
      revealed: false,
    },
    {
      question: "Já participou de um ou mais jogo das gazelas",
      revealed: false,
    },
    {
      question: "Tem ou já teve um Android nos últimos 2 anos",
      revealed: false,
    },
    {
      question: "Já ficou bebado(a) na frente de algum integrante do -A",
      revealed: false,
    },
    {
      question: "Sem dica, passou a vez",
      revealed: false,
    },
    {
      question: "Ganhou um bombom",
      revealed: false,
    },
    {
      question: "Pratica algum esporte",
      revealed: false,
    },
    {
      question: "Já viu neve de perto",
      revealed: false,
    },
    {
      question: "Já trabalhou na mesma empresa que um ou mais participantes do -A",
      revealed: false,
    },
    {
      question: "Faz parte de uma minoria",
      revealed: false,
    },
  ];
  return random ? shuffle(puzzleData) : puzzleData;
};
