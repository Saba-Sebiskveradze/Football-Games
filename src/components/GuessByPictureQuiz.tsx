import { useNavigate, useParams } from "react-router-dom";
import { guessbyphoto } from "../data/guessbyphoto";
import { useState, ChangeEvent } from "react";

const GuessByPictureQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = guessbyphoto.find((q) => q.id === Number(id));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [missedQuestion, setMissedQuestion] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true); // New state for image loading

  // Early return if quiz is not found
  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ebf5ff] to-[#f3e8ff] p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#1f2937]">
            Quiz not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] text-white rounded-lg hover:from-[#2563eb] hover:to-[#9333ea] transition-all"
          >
            Back to HOME
          </button>
        </div>
      </div>
    );
  }

  const checkQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAnswer(value);

    const correctAnswer1 = quiz.questions[currentQuestion].answer1
      .trim()
      .toLowerCase();
    const correctAnswer2 = quiz.questions[currentQuestion].answer2
      .trim()
      .toLowerCase();
    const correctAnswer3 = quiz.questions[currentQuestion].fullname
      .trim()
      .toLowerCase();

    const userAnswerLower = value.trim().toLowerCase();

    if (
      userAnswerLower === correctAnswer1 ||
      userAnswerLower === correctAnswer2 ||
      userAnswerLower === correctAnswer3
    ) {
      setScore(score + 1);
      setAnswerIsCorrect(true);
      setMissedQuestion(false);
    } else {
      setAnswerIsCorrect(false);
    }
  };

  const missQuestion = () => {
    setMissedQuestion(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerIsCorrect(false);
      setMissedQuestion(false);
      setIsImageLoading(true); 
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ebf5ff] to-[#f3e8ff] p-4">
        <div className="max-w-md w-full mx-auto p-8 bg-[#ffffff33] backdrop-blur-lg rounded-2xl shadow-2xl border border-[#ffffff1a] text-center transform transition-all duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold text-[#6b21a8] mb-6">
            Quiz Results
          </h2>

          <div className="mb-8">
            <p className="text-8xl font-bold text-[#6b21a8] mb-4">
              {((score / quiz.questions.length) * 100).toFixed(0)}%
            </p>
            <p className="text-lg text-[#a855f7]/80">
              You scored {score} out of {quiz.questions.length} questions
              correctly
            </p>
          </div>

          <button
            onClick={() => navigate("/guessbypicture")}
            className="w-full px-6 py-3 bg-[#9333ea] backdrop-blur-md text-white rounded-lg border border-[#ffffff1a] cursor-pointer"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#f9fafb] p-4">
      <div className="max-w-5xl w-full mx-auto bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#4b5563]">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </h2>
            <div className="text-lg font-medium text-[#4b5563]">
              Score: {score}
            </div>
          </div>
        </div>
        {missedQuestion || answerIsCorrect ? (
          <div className="h-96 md:h-[36rem] flex items-center justify-center">
            {isImageLoading && (
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#000000]"></div>
            )}
            <img
              src={quiz.questions[currentQuestion].image2}
              alt="Quiz"
              className={`h-full w-full object-contain ${
                isImageLoading ? "hidden" : "block"
              }`}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        ) : (
          <div className="h-96 md:h-[36rem] flex items-center justify-center">
            {isImageLoading && (
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#000000]"></div>
            )}
            <img
              src={quiz.questions[currentQuestion].image}
              alt="Quiz"
              className={`h-full w-full object-contain ${
                isImageLoading ? "hidden" : "block"
              }`}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <input
              type="text"
              className="w-full max-w-md p-3 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all"
              placeholder="Enter your guess here..."
              value={userAnswer}
              onChange={checkQuestion}
            />
            {answerIsCorrect && (
              <div className="w-full max-w-md p-4 bg-[#86efac] border border-[#4ade80] rounded-lg text-[#166534] text-center text-lg font-semibold flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Correct! It's {quiz.questions[currentQuestion].fullname}.
                </span>
              </div>
            )}
            {missedQuestion && (
              <div className="w-full max-w-md p-4 bg-[#fee2e2] border border-[#f87171] rounded-lg text-[#7f1d1d] text-center text-lg font-semibold flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>It's {quiz.questions[currentQuestion].fullname}.</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-[#e5e7eb]">
          <div className="flex justify-center">
            {missedQuestion || answerIsCorrect ? (
              <button
                onClick={nextQuestion}
                className="px-6 py-3 bg-[#3b82f6] text-[#ffffff] rounded-lg hover:from-[#2563eb] hover:to-[#7c3aed] transition-all"
              >
                Next Photo
              </button>
            ) : (
              <button
                onClick={missQuestion}
                className="px-6 py-3 bg-[#3b82f6] text-[#ffffff] rounded-lg hover:from-[#2563eb] hover:to-[#7c3aed] transition-all"
              >
                Reveal Answer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessByPictureQuiz;