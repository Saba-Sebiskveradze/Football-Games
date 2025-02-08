import { Link } from "react-router-dom";
import { FC } from 'react';

interface Card {
  id: number;
  title: string;
  backgroundImage: string;
  textColor: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "FOOTBALL QUIZ",
    backgroundImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    textColor: "#485664",
  },
  {
    id: 2,
    title: "GUESS BY SILHOUETTE",
    backgroundImage: "https://images.unsplash.com/photo-1579952363861-ecaf6df2c23a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    textColor: "#485664",
  },
  {
    id: 3,
    title: "COMING SOON...",
    backgroundImage: "https://images.unsplash.com/photo-1602472097151-72eeec7a3185?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    textColor: "#485664",
  },
];

const MainSection: FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
  <div className="flex flex-col items-center gap-8 md:gap-16">
    {cards.map((card) => (
      <div
        key={card.id}
        className="group relative w-full max-w-5xl h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl md:rounded-[50px] overflow-hidden
                 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl
                 transform hover:-translate-y-1"
      >
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-700 
                   group-hover:scale-105"
          style={{
            backgroundImage: `url(${card.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        {/* Content Container */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide
                         transform transition-all duration-500
                         group-hover:translate-y-0 translate-y-2">
              {card.title}
            </h2>

            {/* Play Button */}
            <Link 
              to="/footballquiz"
              className="relative overflow-hidden bg-white/90 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full
                       transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                       hover:bg-white/95 font-semibold text-lg md:text-xl tracking-wide"
            >
              Play Now
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default MainSection;