import React, { useState } from "react";
import useZ from "./z";

const QuestionModal = props => {
  const setSelected = useZ(z => z.setSelected);
  const selected = useZ(z => z.selected);
  const setScore = useZ(z => z.setScore);
  const score = useZ(z => z.score);
  const team = useZ(z => z.team);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const handleClose = () => {
    setSelected(null);
    setShowingAnswer(!showingAnswer);
  };

  const handleScore = () => {
    setScore({ ...score, [team]: score[team] + selected.value });
    handleClose();
  };

  const handleShowAnswer = () => {
    setShowingAnswer(!showingAnswer);
  };

  return (
    <div className="question-modal">
      <div className="question-modal-question">{selected.question}</div>
      {showingAnswer ? (
        <>
          <div className="question-modal-answer">{selected.answer}</div>
          <button onClick={handleScore} className="team-button">
            Hell yeah!
          </button>
        </>
      ) : (
        <button onClick={handleShowAnswer}> SHOW ANSWER </button>
      )}

      <button onClick={handleClose} className="question-modal-close-button">
        CLOSE
        <span role="img" aria-label="red cross">
          ❌
        </span>
      </button>
    </div>
  );
};

export default QuestionModal;
