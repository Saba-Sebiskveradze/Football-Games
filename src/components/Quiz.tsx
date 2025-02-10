import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { footballquiz } from "../data/footballquiz";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = footballquiz.find((q) => q.id === Number(id));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    if (quiz) {
      const img = new Image();
      img.src = quiz.backgroundImage;
      img.onload = () => setImageLoaded(true);
    }
  }, [quiz]);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz not found</h2>
          <button 
            onClick={() => navigate("/footballquiz")}
            className="px-4 py-2 bg-quiz-accent text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Quiz Results</h2>
          <div className="text-center mb-8">
            <p className="text-5xl md:text-6xl font-bold text-quiz-accent mb-4">
              {((score / quiz.questions.length) * 100).toFixed(0)}%
            </p>
            <p className="text-gray-600">
              You scored {score} out of {quiz.questions.length} questions correctly
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/footballquiz")}
              className="w-full md:w-auto px-6 py-3 bg-quiz-accent text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Back to Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className={`h-32 md:h-48 bg-cover bg-center transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${quiz.backgroundImage})`,
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
          }}
        />
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </h2>
            <div className="text-sm font-medium text-gray-500">
              Score: {score}
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-6">
            {quiz.questions[currentQuestion].question}
          </h3>

          <div className="space-y-3 md:space-y-4">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnswered}
                className={`w-full p-3 md:p-4 text-left rounded-lg transition-all duration-200 ${
                  isAnswered
                    ? option === quiz.questions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : option === selectedOption
                      ? "bg-red-500 text-white"
                      : "bg-gray-100"
                    : "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
                } text-sm md:text-base`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {isAnswered && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="w-full md:w-auto px-6 py-3 bg-quiz-accent text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                {currentQuestion === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;