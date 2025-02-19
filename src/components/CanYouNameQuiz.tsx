import { canyouname } from "../data/canyouname";
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CanYouNameQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = canyouname.find((q) => q.id === Number(id));

  const [guessedName, setGuessedName] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(600); // 1 minute = 60 seconds
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false); // New state to track if the quiz has started
  const [allGuessed, setallGuessed] = useState(false)

  // Handle timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeIsUp(true);
      return;
    }
    if (!isQuizStarted || timeLeft === 0) {
      return;
    }
    if (showResults) return;
    
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isQuizStarted,showResults]);

  useEffect(() => {
    if (timeIsUp) {
      setShowResults(true);
    }
  }, [timeIsUp]);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ebf5ff] to-[#f3e8ff] p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#1f2937]">
            Quiz not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#3b82f6] text-white rounded-lg hover:from-[#2563eb] hover:to-[#9333ea] transition-all"
          >
            Back to HOME
          </button>
        </div>
      </div>
    );
  }
  

  const checkAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAnswer(value);

    const correctAnswers = quiz.answers.filter((answer) => {
      const fullNameMatch =
        answer.fullName.toLowerCase() === value.toLowerCase();
      const firstNameMatch =
        answer.firstName.toLowerCase() === value.toLowerCase();
      const lastNameMatch =
        answer.lastName.toLowerCase() === value.toLowerCase();

      return (
        (fullNameMatch || firstNameMatch || lastNameMatch) &&
        !answeredQuestions.includes(answer.answerId)
      );
    });

    if (correctAnswers.length > 0) {
      const answer = correctAnswers[0];
      if (!answeredQuestions.includes(answer.answerId)) {
        setScore((prevScore) => prevScore + answer.point);
        setGuessedName((prevGuessed) => prevGuessed + 1);
        setAnsweredQuestions((prev) => [...prev, answer.answerId]);
        setUserAnswer("");
      }
    }
    if (answeredQuestions.length + correctAnswers.length === quiz.answers.length) {
        setShowResults(true);
        setallGuessed(true)

    }
  };
  

  const startQuiz = () => {
    setIsQuizStarted(true);
  };
  const giveup = () =>{
    setShowResults(true);

  }

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#f9fafb] p-4">
        <div className="max-w-5xl w-full mx-auto bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden">
          
          
          {allGuessed &&
          <div>
            <div className="flex flex-col items-center space-y- text-lg  font-bold text-[#485664]">
            <div className="w-full max-w-md p-3 flex flex-col items-center ">
              Time Left: {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </div>
          </div>
          <div className="text-[#485664] p-8 font-bold text-5xl flex flex-col items-center"> Congrats! You got all the answers right</div>

          </div>
          }
          {!allGuessed &&
          <div>
            <div className="text-[#485664] font-bold text-5xl flex flex-col items-center"> Time is over</div>
            <div className="p-6 border-b border-[#e5e7eb]">
            <div className="flex justify-around items-center">
              <h2 className="text-lg font-medium text-[#485664]">
                {guessedName} Out of {quiz.answers.length}
              </h2>
              <div className="text-lg font-medium text-[#485664]">
                Score: {score}
              </div>
            </div>
          </div>
          </div>
          }
          

          <div className="p-6 space-y-4 max-h-[36rem] overflow-y-auto border-t border-[#e5e7eb]">
            {quiz.answers.map((answer) => (
              <div
                key={answer.answerId}
                className={`flex items-center space-x-4 p-4 border rounded-lg ${
                  answeredQuestions.includes(answer.answerId)
                    ? "bg-[#86efac] border-[#4ade80]"
                    : "bg-[#fee2e2] border-[#f87171]"
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#2d2d2d]">
                    {answer.fullName}
                  </h3>
                </div>
                <div className="bg-[#f9fafb] px-6 py-3 rounded-lg">
                  <span className="text-lg text-[#3f3f46]">
                    {answer.point} Points
                  </span>
                </div>
              </div>
            ))}
          </div>
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
              {guessedName} Out of {quiz.answers.length}
            </h2>
            <div className="text-lg font-medium text-[#4b5563]">
              Score: {score}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y- text-lg  font-bold text-[#485664]">
          <div className="w-full max-w-md p-3 flex flex-col items-center ">
            Time Left: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </div>
        </div>
        {!isQuizStarted ? (
          <div className="flex flex-col items-center p-8">
            <button
              onClick={startQuiz}
              className="px-6 cursor-pointer py-2 bg-[#3b82f6] text-white rounded-lg hover:from-[#2563eb] hover:to-[#9333ea] transition-all"
            >
              START
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <input
                type="text"
                className="w-full max-w-md p-3 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all"
                placeholder="Enter your guess here..."
                value={userAnswer}
                onChange={checkAnswer}
              />
            </div>
          </div>
        )}

        <div className="p-6 space-y-4 max-h-[36rem] overflow-y-auto border-t border-[#e5e7eb]">
          {quiz.answers.map((answer) => (
            <div
              key={answer.answerId}
              className={`flex items-center space-x-4 p-4 border rounded-lg ${
                answeredQuestions.includes(answer.answerId)
                  ? "bg-[#86efac] border-[#4ade80]"
                  : "border-[#d1d5db]"
              }`}
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-[#2d2d2d]">
                  {answeredQuestions.includes(answer.answerId)
                    ? answer.fullName
                    : "******"}
                </h3>
              </div>
              <div className="bg-[#f9fafb] px-6 py-3 rounded-lg">
                <span className="text-lg text-[#3f3f46]">
                  {answer.point} Points
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center p-8">
            <button
              onClick={giveup}
              className="px-6 cursor-pointer py-2 bg-[#3b82f6] text-white rounded-lg hover:from-[#2563eb] hover:to-[#9333ea] transition-all"
            >
              GIVE UP
            </button>
          </div>
      </div>
    </div>
  );
};

export default CanYouNameQuiz;
