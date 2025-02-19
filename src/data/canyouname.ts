export interface CanYouName {
  id: number;
  title: string;
  timestamp: number;
  backgroundImage: string;
  answers: {
    answerId: number;
    point: number;
    fullName: string;
    firstName: string;
    lastName: string;
  }[];
}

export const canyouname: CanYouName[] = [
  {
    id: 1,
    title: "Can You Name Every Champions League Winning Manager?",
    timestamp: new Date("2024-19-02").getTime(),
    backgroundImage:
      "https://test1-emgndhaqd0c9h2db.a01.azurefd.net/images/3f9a0802-8f59-40c1-879f-42aa540c37cd.png",
    answers: [
      {
        answerId: 1,
        point: 1,
        fullName: "Carlo Ancelotti",
        firstName: "Carlo",
        lastName: "Ancelotti",
      },
      {
        answerId: 2,
        point: 2,
        fullName: "Pep Guardiola",
        firstName: "Pep",
        lastName: "Guardiola",
      },
      {
        answerId: 3,
        point: 2,
        fullName: "Zinedine Zidane",
        firstName: "Zinedine",
        lastName: "Zidane",
      },
      {
        answerId: 4,
        point: 3,
        fullName: "Alex Ferguson",
        firstName: "Alex",
        lastName: "Ferguson",
      },
      {
        answerId: 5,
        point: 3,
        fullName: "Vicente del Bosque",
        firstName: "Vicente",
        lastName: "del Bosque",
      },
      {
        answerId: 6,
        point: 3,
        fullName: "Jose Mourinho",
        firstName: "Jose",
        lastName: "Mourinho",
      },
      {
        answerId: 7,
        point: 3,
        fullName: "Ottmar Hitzfeld",
        firstName: "Ottmar",
        lastName: "Hitzfeld",
      },
      {
        answerId: 8,
        point: 3,
        fullName: "Jupp Heynckes",
        firstName: "Jupp",
        lastName: "Heynckes",
      },
      {
        answerId: 9,
        point: 4,
        fullName: "Frank Rijkaard",
        firstName: "Frank",
        lastName: "Rijkaard",
      },
      {
        answerId: 10,
        point: 4,
        fullName: "Marcello Lippi",
        firstName: "Marcello",
        lastName: "Lippi",
      },
      {
        answerId: 11,
        point: 4,
        fullName: "Louis van Gaal",
        firstName: "Louis",
        lastName: "van Gaal",
      },
      {
        answerId: 12,
        point: 4,
        fullName: "Raymond Goethals",
        firstName: "Raymond",
        lastName: "Goethals",
      },
      {
        answerId: 13,
        point: 4,
        fullName: "Luis Enrique",
        firstName: "Luis",
        lastName: "Enrique",
      },
      {
        answerId: 14,
        point: 4,
        fullName: "Jurgen Klopp",
        firstName: "Jurgen",
        lastName: "Klopp",
      },
      {
        answerId: 15,
        point: 4,
        fullName: "Hansi Flick",
        firstName: "Hansi",
        lastName: "Flick",
      },
      {
        answerId: 16,
        point: 4,
        fullName: "Thomas Tuchel",
        firstName: "Thomas",
        lastName: "Tuchel",
      },
      {
        answerId: 17,
        point: 4,
        fullName: "Fabio Capello",
        firstName: "Fabio",
        lastName: "Capello",
      },
      {
        answerId: 18,
        point: 4,
        fullName: "Rafael Benitez",
        firstName: "Rafael",
        lastName: "Benitez",
      },
      {
        answerId: 19,
        point: 4,
        fullName: "Roberto Di Matteo",
        firstName: "Roberto",
        lastName: "Di Matteo",
      },
    ],
  },
];
