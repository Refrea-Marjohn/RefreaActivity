import React, { useState } from "react";
import Question from "./Question";

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Markdown Language", "Hyper Transfer Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which hook is used in React for state management?",
    options: ["useEffect", "useFetch", "useState", "useRouter"],
    answer: "useState"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Application Protocol Interface", "Applied Program Internet", "Application Process Information"],
    answer: "Application Programming Interface"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [showScore, setShowScore] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = option;
    setSelectedAnswers(newAnswers);
    setShowFeedback(true);

    if (option === quizQuestions[currentQuestion].answer && !selectedAnswers[currentQuestion]) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(null));
    setShowScore(false);
    setShowFeedback(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {quizQuestions.length}</h2>
          <p>Percentage: {(score / quizQuestions.length * 100).toFixed(2)}%</p>
          <button onClick={handleRestart} className="next-btn">Try Again</button>
        </div>
      ) : (
        <Question
          data={quizQuestions[currentQuestion]}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswers[currentQuestion]}
          showFeedback={showFeedback}
          handleNext={handleNext}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizQuestions.length}
        />
      )}
    </div>
  );
};

export default Quiz;
