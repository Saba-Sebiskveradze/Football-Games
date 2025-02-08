import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FootballQuiz from "./pages/FootballQuiz";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/footballquiz" element={<FootballQuiz />} />
          <Route path="/footballquiz/:id" element={<QuizPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
