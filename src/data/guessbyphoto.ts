export interface GuessByPhoto {
  id: number;
  title: string;
  backgroundImage: string;
  timestamp: number;
  questions: {
    questionID: number;
    image: string;
    image2: string;
    fullname: string;
    answer1: string;
    answer2: string;
  }[];
}
export const guessbyphoto: GuessByPhoto[] = [
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
        image2: "https://c4.wallpaperflare.com/wallpaper/326/851/694/lionel-messi-4k-wallpaper-preview.jpg",
        fullname: "Lionel Messi",
        answer1: "Messi",
        answer2: "Lionel",
      },
      {
        questionID: 2,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbEkKYP0b9uQ3TPIavmkLmDweD-9LmUMa6qedlCXDSbqCP7yGaQGL6fPG7Nb_vknmRNBTaOlIwOTeqw5Ow0JjEVKJ25L-n-KrsC-VfBS-YI5ThTaMnWkGq6yG7tdPoI9tSZ0ZpUSQFnPP9/s1600/Podolski.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/398/1013/275/background-gate-player-arsenal-wallpaper-preview.jpg",
        fullname: "Lukas Podolski",
        answer1: "Podolski",
        answer2: "Lukas",
      },
      {
        questionID: 3,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOX4Dj8-uohVYvmaTifa5p2ZebusxToDpkwrOcn8yHuLiR5BvlCeVqsSN-q7rKoUdOAqF_tv1SAiXqs2bhyphenhyphenFRIrz-3ackiRUir-6H_PWH1Plg2u9aKOO5pURjJi7CmvuRHgFkUXAeiYncM/s320/RAMOS1.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/191/128/912/sergio-ramos-real-madrid-men-s-white-adidas-fly-emirates-long-sleeve-shirt-wallpaper-preview.jpg",
        fullname: "Sergio Ramos",
        answer1: "Ramos",
        answer2: "Sergio",
      },
      {
        questionID: 4,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPJT_thP8YvOxfPsRYIGNt46hH0uE7SBlnsGr2DMHlPtzyu-hYo_BDRa4ipjEsi5QDq4Wsqpxrb8a5L9Ol0g5GomgDyl7OlVvdEix-0lObt6fW1CkhzvbiVipkF1m-B5NH_0Ui9IHRgAsr/s1600/Rio+Ferdinand.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/818/269/67/cutout-ferdinand-hdr-league-wallpaper-preview.jpg",
        fullname: "Rio Ferdinand",
        answer1: "Ferdinand",
        answer2: "Rio",
      },
      {
        questionID: 5,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhV7r8OUQFl8InTMu57gpSdbECL_r_D7sMJ0A63jeSoaY2B9zDC04PA4C7umAQOmSuRwZ-EkxCHkhhq6C99G56aU5TMMbMpm8pf8Gw3nStzIKIhkbaqOhLACGNBLD1vVvGKCHfrTY59N0Dl/s320/Xabi+Alonso.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/721/345/84/alonso-soccer-spain-xabi-wallpaper-preview.jpg",
        fullname: "Xabi Alonso",
        answer1: "Alonso",
        answer2: "Xabi",
      },
      {
        questionID: 6,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK9dWLjJK4ol68abCICl37fIj2E8kq38ysquYI-M1h5omJOS-GJeOkUznv3WAkyxusKsNtlRUmAnijHqDym8xA_nwALpSuQyGYlMO1i5b1oZI5NmFdhJK2kNWMeJ5nlbnhPpPWWUSqt84b/s400/ZINEDINE+ZIDANE+4.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/153/404/971/zinedine-zidane-white-blue-and-red-soccer-jersey-wallpaper-preview.jpg",
        fullname: "Zinedine Zidane",
        answer1: "Zidane",
        answer2: "Zinedine",
      },
      {
        questionID: 7,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlq874VhrUPeikkuC4qbg0phY0C1bjVD6d_GGUG0d-gCeqDF-98UXJdkG9QLEfnxNUKxZ5F7_ffttxRy9akJMZEB96ShWkNKPQmEqKS2iGjIukTJGgOtfatM9l4qynwNF7-2aRvQV5zCGh/s320/Zlatan+Ibrahimovic.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/158/459/712/zlatan-ibrahimovic-smiling-tattoo-football-wallpaper-preview.jpg",
        fullname: "Zlatan Ibrahimović",
        answer1: "Ibrahimović",
        answer2: "Zlatan",
      },
      {
        questionID: 8,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFmAbzbLmEADlq40m8VEvsVuuF93gTyRo5pEJrMD1QzTXtJlHVoFxzp0Mzh7BUNCnLXNKACXTGgwnSPZ7FzvXZWEXCmIg30WCY8lDcGE8qVa7KnHmqHCTan0ILOXAtS1shxcXuM_sFpCVS/s1600/benzema+2.jpg",
        image2: "https://c4.wallpaperflare.com/wallpaper/547/151/828/karim-benzema-wallpaper-preview.jpg",
        fullname: "Karim Benzema",
        answer1: "Benzema",
        answer2: "Karim",
      },
      {
        questionID: 9,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBlwsbOaGzywria6nSBhDw_f-DlgqVpNvxzwdw8-2EeWUqGL9DT8JouPQMNPYn18SNyLz2UlvnQocLRpzEe5B5Iviaz9rmaRFliI6zlHhuGThJwN6_Nu7wBmrBqS9qtPdbne1mfg4EWjBL/s640/bernardo+silva.JPG",
        image2: "https://i.imgur.com/i16InUZ.jpeg",
        fullname: "Bernardo Silva",
        answer1: "Silva",
        answer2: "Bernardo",
      },
      {
        questionID: 10,
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDDlYlGps8Kc_2jrqVa5M7UQPvFeR5FEboaYXB2e1yE66S48oB2NT4NJh_HqgcECPdDh2Z9eWC5t8G0dVrWobWYMFFPCnxbbPRw07a3Nd4SAiMrJ2oLzcA-zlJL0c6f2oLCHmj5Rxp1WbQ/s640/joao+felix+2.jpg",
        image2: "https://i.imgur.com/vOYShrS.jpeg",
        fullname: "Joao Felix",
        answer1: "Felix",
        answer2: "Joao",
      },
    ],
  },
  {
    id: 2,
    title: "Can You Guess the Footballer by Their Hairline?",
    backgroundImage:
      "https://c4.wallpaperflare.com/wallpaper/885/568/1021/soccer-david-luiz-wallpaper-preview.jpg",
    timestamp: new Date("2024-09-01").getTime(),
    questions: [
      {
        questionID: 1,
        image: "https://i.imgur.com/efKf7GA.png",
        image2: "https://i.imgur.com/izJekjo.png",
        fullname: "Lamine Yamal",
        answer1: "Lamine",
        answer2: "Yamal",
      },
      {
        questionID: 2,
        image: "https://i.imgur.com/LDL9kyb.jpeg",
        image2: "https://i.imgur.com/nVu2utX.jpeg",
        fullname: "Kylian Mbappe",
        answer1: "Kylian",
        answer2: "Mbappe",
      },
      {
        questionID: 3,
        image: "https://i.imgur.com/ZFdq2uU.jpeg",
        image2: "https://i.imgur.com/wZWgBQl.jpeg",
        fullname: "Phil Foden",
        answer1: "Phil",
        answer2: "Foden",
      },
      {
        questionID: 4,
        image: "https://i.imgur.com/dWFNUqY.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/441/496/1022/soccer-robert-lewandowski-robert-lewandowski-wallpaper-preview.jpg",
        fullname: "Robert Lewandowski",
        answer1: "Robert",
        answer2: "Lewandowski",
      },
      {
        questionID: 5,
        image: "https://i.imgur.com/XX6dSwC.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/590/53/211/paul-pogba-juventus-footballer-wallpaper-preview.jpg",
        fullname: "Paul Pogba",
        answer1: "Paul",
        answer2: "Pogba",
      },
      {
        questionID: 6,
        image: "https://i.imgur.com/9FBPXhc.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/71/852/856/soccer-marcus-rashford-manchester-united-f-c-wallpaper-preview.jpg",
        fullname: "Marcus Rashford",
        answer1: "Marcus",
        answer2: "Rashford",
      },
      {
        questionID: 7,
        image: "https://i.imgur.com/58eewIj.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/554/66/429/soccer-manchester-city-football-teams-sergio-aguero-2560x1600-sports-football-hd-art-wallpaper-preview.jpg",
        fullname: "Sergio Aguero",
        answer1: "Sergio",
        answer2: "Aguero",
      },
      {
        questionID: 8,
        image: "https://i.imgur.com/WKRQaeL.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/582/861/227/sports-harry-kane-english-soccer-wallpaper-preview.jpg",
        fullname: "Harry Kane",
        answer1: "Harry",
        answer2: "Kane",
      },
      {
        questionID: 9,
        image: "https://i.imgur.com/5RmlHAe.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/531/700/838/soccer-luis-suarez-luis-suarez-uruguayan-wallpaper-preview.jpg",
        fullname: "Luis Suarez",
        answer1: "Luis",
        answer2: "Suarez",
      },
      {
        questionID: 10,
        image: "https://i.imgur.com/Md85gKz.jpeg",
        image2: "https://c4.wallpaperflare.com/wallpaper/271/849/128/sport-football-spain-barcelona-wallpaper-preview.jpg",
        fullname: "Xavi",
        answer1: "Xavi",
        answer2: "Xavi",
      },
    ],
  },
];
