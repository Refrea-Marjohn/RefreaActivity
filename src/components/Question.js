import React from "react";

const Question = ({
  data,
  handleAnswer,
  selectedAnswer,
  showFeedback,
  handleNext,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className="question-section">
      <h3>Question {questionNumber} of {totalQuestions}</h3>
      <p>{data.question}</p>
      <div className="options">
        {data.options.map((option, index) => {
          const isCorrect = option === data.answer;
          const isSelected = option === selectedAnswer;

          let className = "option-btn";
          if (showFeedback) {
            if (isCorrect) className += " correct";
            else if (isSelected) className += " incorrect";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={className}
              disabled={showFeedback}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <>
          {selectedAnswer === data.answer ? (
            <p className="feedback correct-text">✅ Correct!</p>
          ) : (
            <p className="feedback incorrect-text">
              ❌ Incorrect. Correct answer: <strong>{data.answer}</strong>
            </p>
          )}
          <button onClick={handleNext} className="next-btn">Next</button>
        </>
      )}
    </div>
  );
};

export default Question;
