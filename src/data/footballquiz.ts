export interface FootballQuiz {
  id: number;
  title: string;
  backgroundImage: string;
  timestamp: number;
  difficulty: "Easy" | "Medium" | "Hard"; 
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
      "https://c4.wallpaperflare.com/wallpaper/152/445/179/soccer-leicester-city-f-c-emblem-logo-hd-wallpaper-preview.jpg",
    timestamp: new Date("2024-07-01").getTime(),
    difficulty:"Hard",
    questions: [
      {
        questionID: 1,
        question:
          "Jamie Vardy was one of the shining stars of Leicester's unforgettable season. From which club did he move to Leicester? ",
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
        options: ["Greece", "Italy", "Denmark", "Slovenia"],
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
    timestamp: new Date("2024-08-01").getTime(),
    difficulty:"Medium",

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
  {
    id: 3,
    title: "Managers Quiz",
    backgroundImage: "https://images.unsplash.com/photo-1574772135913-d519461c3996?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: new Date("2024-09-01").getTime(),
    difficulty:"Easy",

    questions: [
      {
        questionID: 1,
        question: "After Sir Alex Ferguson's magnificent career at Manchester United, who became the next coach of the Red Devils?",
        options: ["Ryan Giggs", "David Moyes", "Louis van Gaal", "Ron Atkinson"],
        answer: "David Moyes",
      },
      {
        questionID: 2,
        question:
          "Which coach led Chelsea to their first-ever UEFA Champions League title in 2012?",
        options: ["José Mourinho", "Roberto Di Matteo", "Carlo Ancelotti", "Antonio Conte"],
        answer: "Roberto Di Matteo",
      },
      {
        questionID: 3,
        question:
          "Before taking over Manchester United in 2016, José Mourinho was sacked by which club?",
        options: ["Chelsea", "Real Madrid", "Inter Milan", "Porto"],
        answer: "Chelsea",
      },
      {
        questionID: 4,
        question:
          "Which coach led Portugal to victory in UEFA Euro 2016?",
        options: ["Luiz Felipe Scolari", "Carlos Queiroz", "Fernando Santos", "José Mourinho"],
        answer: "Fernando Santos",
      },
      {
        questionID: 5,
        question:
          "Who was the manager of the Liverpool team that won the UEFA Champions League in 2005, coming back from a 3-0 deficit to win on penalties?",
        options: ["Kenny Dalglish", "Brendan Rodgers", "Roy Hodgson", "Rafael Benitez"],
        answer: "Rafael Benitez",
      },
      {
        questionID: 6,
        question:
          "Which coach is known for his high-pressing style and managed RB Leipzig before joining Bayern Munich?",
        options: ["Julian Nagelsmann", "Thomas Tuchel", "Hansi Flick", "Ralf Rangnick"],
        answer: "Julian Nagelsmann",
      },
      {
        questionID: 7,
        question:
          "Which coach led Tottenham Hotspur to their first UEFA Champions League final in 2019?",
        options: ["José Mourinho", "Mauricio Pochettino", "Antonio Conte", "Nuno Espírito Santo"],
        answer: "Mauricio Pochettino",
      },
      {
        questionID: 8,
        question:
          "Which coach led Italy to victory in the 2020 UEFA European Championship (Euro 2020)?",
        options: ["Marcello Lippi", "Carlo Ancelotti", "Antonio Conte", "Roberto Mancini"],
        answer: "Roberto Mancini",
      },
      {
        questionID: 9,
        question:
          "Who was the coach of Spain's national football team during Euro 2024?",
        options: ["Luis Enrique", "Luis de la Fuente", "Julen Lopetegui", "Vicente del Bosque"],
        answer: "Luis de la Fuente",
      },
      {
        questionID: 10,
        question:
          "Which coach led Germany to victory in the 2014 FIFA World Cup?",
        options: ["Joachim Löw", "Jürgen Klopp", "Ralf Rangnick", "Raymond Domenech"],
        answer: "Joachim Löw",
      },

    ],
  },
  {
    id: 4,
    title: "How well do you know Neymar?",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/479/40/900/soccer-neymar-brazilian-paris-saint-germain-f-c-hd-wallpaper-preview.jpg",
    timestamp: new Date("2024-10-01").getTime(),
    difficulty:"Easy",

    questions: [
      {
        questionID: 1,
        question: "At which Brazilian club did Neymar start his professional career",
        options: ["Flamengo", "Santos", "Fluminese", "Palmeiras"],
        answer: "Santos",
      },
      {
        questionID: 2,
        question:
          "He won the Champions League with Barcelona in 2015, but who did they beat 3-1 in the Berlin final?",
        options: ["Bayern Munich", "Paris", "Liverpool", "Juventus"],
        answer: "Juventus",
      },
      {
        questionID: 3,
        question:
          "Neymar was transferred to Barcelona in the summer of what year?",
        options: ["2012", "2013", "2014", "2015"],
        answer: "2013",
      },
      {
        questionID: 4,
        question:
          "Which year did Neymar won Olympic gold",
        options: ["2012", "2014", "2016", "2018"],
        answer: "2016",
      },
      {
        questionID: 5,
        question:
          "Where Neymar was born",
        options: ["São Paulo", "Rio de Janeiro", "Salvador", "Curitiba"],
        answer: "São Paulo",
      },
      {
        questionID: 6,
        question:
          "Which Saudi Arabian team did Neymar play for?",
        options: ["Al-Nassr FC", "Al Hilal", "Al-Ittihad Club", "Al-Ahli Saudi FC"],
        answer: "Al Hilal",
      },
      {
        questionID: 7,
        question:
          "How did Neymar score his second goal in Barcelona's 6-1 comeback win over PSG in the 2016-17 UEFA Champions League?",
        options: ["A close-range volley", "A solo goal dribbling past defenders", "A long-range free kick", "A penalty kick"],
        answer: "A penalty kick",
      },
      {
        questionID: 8,
        question:
          "What was the record-breaking transfer fee when Neymar moved from Barcelona to PSG in 2017?",
        options: ["€180 million", "€200 million", "€222 million", "€250 million"],
        answer: "€222 million",
      },
      {
        questionID: 9,
        question:
          "What is Neymar's full name?",
        options: ["Neymar dos Santos Junior", "Neymar da Silva Santos Junior", "Neymar Luiz de Souza", "Neymar Carlos da Silva"],
        answer: "Neymar da Silva Santos Junior",
      },
      {
        questionID: 10,
        question:
          "In which year did Neymar make his debut for Paris Saint-Germain?",
        options: ["2015", "2016", "2017", "2018"],
        answer: "2017",
      },

    ],
  },
 
];
