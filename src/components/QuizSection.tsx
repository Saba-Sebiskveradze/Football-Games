import { useNavigate } from "react-router-dom";
import {footballquiz } from "../data/footballquiz";
import { FC } from 'react';
const QuizSection: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl md:text-8xl text-DavyGrey font-kodemono mb-16 text-center 
                     bg-gradient-to-r from-DavyGrey to-gray-500 bg-clip-text text-transparent
                     animate-fade-in">
        FOOTBALL QUIZ
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {footballquiz.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => navigate(`/footballquiz/${quiz.id}`)}
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
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h2 className="text-xl font-bold text-white tracking-wide
                           transform transition-all duration-500
                           group-hover:translate-y-0 translate-y-2">
                {quiz.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;