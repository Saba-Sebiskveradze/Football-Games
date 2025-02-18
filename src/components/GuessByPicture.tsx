import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { guessbyphoto } from "../data/guessbyphoto";

const GuessByPicture: FC = () => {
  const navigate = useNavigate();
  const sortedQuiz = [...guessbyphoto].sort(
    (a, b) => b.timestamp - a.timestamp
  );
  return (
    <div><div className="container mx-auto px-4 py-16">
    <h1
      className="text-6xl md:text-8xl text-[#485664] font-kodemono mb-16 text-center 
                   bg-[#485664]  bg-clip-text text-transparent
                   animate-fade-in "
    >
      GUESS BY PHOTO
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {sortedQuiz.map((quiz) => (
        <div
          key={quiz.id}
          onClick={() => navigate(`/guessbypicture/${quiz.id}`)}
          className="group relative h-[400px] rounded-3xl overflow-hidden 
                   shadow-lg transition-all duration-500 ease-out hover:shadow-2xl
                   transform hover:-translate-y-1 cursor-pointer"
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700 
                     group-hover:scale-105"
            style={{
              backgroundImage: `url(${quiz.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

          {/* Content */}
          <div className="absolute flex flex-col gap-[5px] inset-x-0 bottom-0 p-6">
            <h2
              className="text-xl font-bold text-[#fff] tracking-wide
                         transform transition-all duration-500
                         group-hover:translate-y-0 translate-y-2"
            >
              {quiz.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default GuessByPicture