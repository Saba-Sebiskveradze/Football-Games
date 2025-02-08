export interface FootballQuiz {
  id: number;
  title: string;
  backgroundImage: string;
  questions: {
    questionID: number;
    question: string;
    options: string[];
    answer: string;
  }[];
}
export const footballquiz: FootballQuiz[] = [
  {
    id: 1,
    title: "How do you remember Leicester 2015–16 season?",
    backgroundImage:
      "https://theanalyst.com/wp-content/uploads/2021/04/analyst-banner-leicester.jpg",
    questions: [
      {
        questionID: 1,
        question:
          "Jamie Vardy was one of the shining stars of Leicester's unforgettable season. From which club did he move to Leicester?",
        options: ["Birmingham", "Bournemouth", "Fleetwod", "AFC Wimbledon"],
        answer: "Fleetwod",
      },
      {
        questionID: 2,
        question:
          "Who was the Premier League's top scorer in the 2015-2016 season?",
        options: ["Vardy", "Kane", "Aguero", "Mahrez"],
        answer: "Kane",
      },
      {
        questionID: 3,
        question:
          "How many consecutive games did Jamie Vardy score in to break Ruud Van Nistelrooy's record?",
        options: ["16", "13", "9", "11"],
        answer: "11",
      },
      {
        questionID: 4,
        question:
          "Leicester became champions, but do you remember who came in second place that year?",
        options: ["Tottenham", "Liverpool", "Manchester City", "Arsenal"],
        answer: "Arsenal",
      },
      {
        questionID: 5,
        question:
          "By how many points did Leicester City finish ahead of the second-place team in the Premier League?",
        options: ["10", "13", "5", "7"],
        answer: "10",
      },

      {
        questionID: 6,
        question:
          "What place did Leicester finish in the Premier League the year after winning the title?",
        options: ["4", "6", "9", "12"],
        answer: "12",
      },
      {
        questionID: 7,
        question:
          "What was the combined cost of Leicester City's starting XI in their 2015–16 Premier League title-winning season?",
        options: ["£28.8m", "£9.2m", "£15m", "£34.1m"],
        answer: "£28.8m",
      },
      {
        questionID: 8,
        question:
          "Which player cost the most in Leicester City's 2015–16 Premier League-winning starting XI?",
        options: ["Kante", "Drinkwater", "Mahrez", "Okazaki"],
        answer: "Okazaki",
      },
      {
        questionID: 9,
        question:
          "Before joining Leicester City, which team did Claudio Ranieri coach?",
        options: ["	Greece", "Italy", "Denmark", "Slovenia"],
        answer: "Greece",
      },
      {
        questionID: 10,
        question:
          "After winning the Premier League, how did Leicester City perform in the Champions League?",
        options: [
          "Stuck in the group stage",
          "Eliminated in the 1/8 finals",
          "Eliminated in the Quarter-finals",
          "Eliminated in the Semi-finals",
        ],
        answer: "Eliminated in the Quarter-finals",
      },
    ],
  },
  {
    id: 2,
    title: "Guess the club's all-time top scorer",
    backgroundImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop",
    questions: [
      {
        questionID: 1,
        question:
          "Who is Manchester United's all-time top goalscorer?",
        options: ["Wayne Rooney", "Sir Bobby Charlton", "Denis Law", "George Best"],
        answer: "Wayne Rooney",
      },
      {
        questionID: 2,
        question:
          "Who is Inter Milan's all-time top goalscorer?",
        options: ["Alessandro Altobelli", "Lautaro Martínez", "Giuseppe Meazza", "Sandro Mazzola"],
        answer: "Giuseppe Meazza",
      },
      {
        questionID: 3,
        question:
          "Who is SSC Napoli's all-time top goalscorer?",
        options: ["Diego Maradona", "Marek Hamsik", "Dries Mertens", "Lorenzo Insigne"],
        answer: "Dries Mertens",
      },
      {
        questionID: 4,
        question:
          "Who is Liverpool's all-time top goalscorer?",
        options: ["Steven Gerrard", "Ian Rush", "Roger Hunt", "Mohamed Salah"],
        answer: "Ian Rush",
      },
      {
        questionID: 5,
        question:
          "Who is Bayern Munich's all-time top goalscorer?",
        options: ["Karl-Heinz Rummenigge", "Thomas Müller", "Robert Lewandowski", "Gerd Müller"],
        answer: "Gerd Müller",
      },
      {
        questionID: 6,
        question:
          "Who is Sevilla's all-time top goalscorer?",
        options: ["Frédéric Kanouté", "Luís Fabiano", "Wissam Ben Yedder", "Álvaro Negredo"],
        answer: "Frédéric Kanouté",
      },
      {
        questionID: 7,
        question:
          "Who is Villarreal's all-time top goalscorer?",
        options: ["Diego Forlán", "Gerard Moreno", "Santi Cazorla", "Cédric Bakambu"],
        answer: "Gerard Moreno",
      },
      {
        questionID: 8,
        question:
          "Who is Atalanta's all-time top goalscorer?",
        options: ["Cristiano Doni", "Josip Ilicic", "Duván Zapata", "Papu Gómez"],
        answer: "Cristiano Doni",
      },
      {
        questionID: 9,
        question:
          "Who is AS  Monaco's all-time top goalscorer?",
        options: ["Wissam Ben Yedder", "Radamel Falcao", "Delio Onnis", "Youri Djorkaeff"],
        answer: "Delio Onnis",
      },
      {
        questionID: 10,
        question:
          "Who is Chelsea's all-time top goalscorer?",
        options: ["Bobby Tambling", "Didier Drogba", "Frank Lampard", "Eden Hazard"],
        answer: "Frank Lampard",
      },

    ],
  },
  // {
  //   id: 3,
  //   title: "MLS",
  //   backgroundImage: "https://images.unsplash.com/photo-1654722592077-546a2ca2255c?q=80&w=1965&auto=format&fit=crop",
  //   questions: [
  //     {
  //       question: "Which country won the 2018 FIFA World Cup?",
  //       options: ["France", "Brazil", "Germany", "Spain"],
  //       answer: "France",
  //     },

  //   ],
  // },
  // {
  //   id: 4,
  //   title: "European Leagues",
  //   backgroundImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop",
  //   questions: [
  //     {
  //       question: "Which country won the 2018 FIFA World Cup?",
  //       options: ["France", "Brazil", "Germany", "Spain"],
  //       answer: "France",
  //     },

  //   ],
  // },
  // {
  //   id: 5,
  //   title: "World Cup Moments",
  //   backgroundImage: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2069&auto=format&fit=crop",
  //   questions: [
  //     {
  //       question: "Which country won the 2018 FIFA World Cup?",
  //       options: ["France", "Brazil", "Germany", "Spain"],
  //       answer: "France",
  //     },

  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Champions League Classics",
  //   backgroundImage: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2023&auto=format&fit=crop",
  //   questions: [
  //     {
  //       question: "Which country won the 2018 FIFA World Cup?",
  //       options: ["France", "Brazil", "Germany", "Spain"],
  //       answer: "France",
  //     },

  //   ],
  // },
];
