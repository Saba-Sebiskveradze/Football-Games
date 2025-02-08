import { useState } from "react";
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

  if (!quiz) {
    return (
      <div className=" flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz not found</h2>
          <button 
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
          >
            Back to Home
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl w-full mx-4 p-8 bg-white rounded-2xl shadow-lg ">
          <h2 className="text-3xl font-bold text-center mb-6">Quiz Results</h2>
          <div className="text-center mb-8">
            <p className="text-6xl font-bold text-quiz-accent mb-4">
              {((score / quiz.questions.length) * 100).toFixed(0)}%
            </p>
            <p className="text-gray-600">
              You scored {score} out of {quiz.questions.length} questions correctly
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/footballquiz")}
              className="px-8 py-4 bg-quiz-accent text-white rounded-lg hover:bg-opacity-90 transition-all cursor-pointer"
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
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${quiz.backgroundImage})` }}
        />
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </h2>
            <div className="text-sm font-medium text-gray-500">
              Score: {score}
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">
            {quiz.questions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-lg transition-all duration-200 ${
                  isAnswered
                    ? option === quiz.questions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : option === selectedOption
                      ? "bg-red-500 text-white"
                      : "bg-gray-100"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {isAnswered && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
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