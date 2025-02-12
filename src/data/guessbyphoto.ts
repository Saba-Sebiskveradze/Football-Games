export interface GuessByPhoto {
  id: number;
  title: string;
  backgroundImage: string;
  timestamp: number;
  questions: {
    questionID: number;
    image: string;
    fullname: string;
    answer1: string;
    answer2: string;
  }[];
}
export const guessbyphoto: [GuessByPhoto] = [
  {
    id: 1,
    title: "Guess the Footballer from Their Childhood Photo (Vol. 1)",
    backgroundImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj003ocWnDZx61d3X74EHTnQMdJnZm118cLsGJXO2bqVkv99BKLyOTBgVQ1An6IRJz045ZUDMtqVbE7wjbfL0pwGUBGuSrYbk_NKNDkrAs11xmapsBWiBXQ0mHyONpkZabsrf17J9QznEJ/s640/ronaldo2.jpg",
    timestamp: new Date("2024-07-01").getTime(),
    questions: [
      {
        questionID: 1,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig0ki5szhu8RoZJjG18pchA_XKf8GatXAq8_fOv27mqiBRC4hzP2GLs3cyQ80dD35z8gvi1Gy5SooIpWt9emBDstQ7j9R8P48KCrtroaHwgazMesNhlaqEj0vGOnq-Oau5qMiWEZ5wV7Ab/s1600/MESSI89.jpg",
        fullname: "Lionel Messi",
        answer1: "Messi",
        answer2: "Lionel",
      },
      {
        questionID: 2,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbEkKYP0b9uQ3TPIavmkLmDweD-9LmUMa6qedlCXDSbqCP7yGaQGL6fPG7Nb_vknmRNBTaOlIwOTeqw5Ow0JjEVKJ25L-n-KrsC-VfBS-YI5ThTaMnWkGq6yG7tdPoI9tSZ0ZpUSQFnPP9/s1600/Podolski.jpg",
        fullname: "Lukas Podolski",
        answer1: "Podolski",
        answer2: "Lukas",
      },
      {
        questionID: 3,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOX4Dj8-uohVYvmaTifa5p2ZebusxToDpkwrOcn8yHuLiR5BvlCeVqsSN-q7rKoUdOAqF_tv1SAiXqs2bhyphenhyphenFRIrz-3ackiRUir-6H_PWH1Plg2u9aKOO5pURjJi7CmvuRHgFkUXAeiYncM/s320/RAMOS1.jpg",
        fullname: "Sergio Ramos",
        answer1: "Ramos",
        answer2: "Sergio",
      },
      {
        questionID: 4,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPJT_thP8YvOxfPsRYIGNt46hH0uE7SBlnsGr2DMHlPtzyu-hYo_BDRa4ipjEsi5QDq4Wsqpxrb8a5L9Ol0g5GomgDyl7OlVvdEix-0lObt6fW1CkhzvbiVipkF1m-B5NH_0Ui9IHRgAsr/s1600/Rio+Ferdinand.jpg",
        fullname: "Rio Ferdinand",
        answer1: "Ferdinand",
        answer2: "Rio",
      },
      {
        questionID: 5,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhV7r8OUQFl8InTMu57gpSdbECL_r_D7sMJ0A63jeSoaY2B9zDC04PA4C7umAQOmSuRwZ-EkxCHkhhq6C99G56aU5TMMbMpm8pf8Gw3nStzIKIhkbaqOhLACGNBLD1vVvGKCHfrTY59N0Dl/s320/Xabi+Alonso.jpg",
        fullname: "Xabi Alonso",
        answer1: "Alonso",
        answer2: "Xabi",
      },
      {
        questionID: 6,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK9dWLjJK4ol68abCICl37fIj2E8kq38ysquYI-M1h5omJOS-GJeOkUznv3WAkyxusKsNtlRUmAnijHqDym8xA_nwALpSuQyGYlMO1i5b1oZI5NmFdhJK2kNWMeJ5nlbnhPpPWWUSqt84b/s400/ZINEDINE+ZIDANE+4.jpg",
        fullname: "Zinedine Zidane",
        answer1: "Zidane",
        answer2: "Zinedine",
      },
      {
        questionID: 7,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlq874VhrUPeikkuC4qbg0phY0C1bjVD6d_GGUG0d-gCeqDF-98UXJdkG9QLEfnxNUKxZ5F7_ffttxRy9akJMZEB96ShWkNKPQmEqKS2iGjIukTJGgOtfatM9l4qynwNF7-2aRvQV5zCGh/s320/Zlatan+Ibrahimovic.jpg",
        fullname: "Zlatan Ibrahimović",
        answer1: "Ibrahimović",
        answer2: "Zlatan",
      },
      {
        questionID: 8,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFmAbzbLmEADlq40m8VEvsVuuF93gTyRo5pEJrMD1QzTXtJlHVoFxzp0Mzh7BUNCnLXNKACXTGgwnSPZ7FzvXZWEXCmIg30WCY8lDcGE8qVa7KnHmqHCTan0ILOXAtS1shxcXuM_sFpCVS/s1600/benzema+2.jpg",
        fullname: "Karim Benzema",
        answer1: "Benzema",
        answer2: "Karim",
      },
      {
        questionID: 9,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBlwsbOaGzywria6nSBhDw_f-DlgqVpNvxzwdw8-2EeWUqGL9DT8JouPQMNPYn18SNyLz2UlvnQocLRpzEe5B5Iviaz9rmaRFliI6zlHhuGThJwN6_Nu7wBmrBqS9qtPdbne1mfg4EWjBL/s640/bernardo+silva.JPG",
        fullname: "Bernardo Silva",
        answer1: "Silva",
        answer2: "Bernardo",
      },
      {
        questionID: 10,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDDlYlGps8Kc_2jrqVa5M7UQPvFeR5FEboaYXB2e1yE66S48oB2NT4NJh_HqgcECPdDh2Z9eWC5t8G0dVrWobWYMFFPCnxbbPRw07a3Nd4SAiMrJ2oLzcA-zlJL0c6f2oLCHmj5Rxp1WbQ/s640/joao+felix+2.jpg",
        fullname: "Joao Felix",
        answer1: "Felix",
        answer2: "Joao",
      },
    ],
  },
];
