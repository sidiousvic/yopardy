import React, { useState } from "react";
import useZ from "../z";
import Fade from "react-reveal/Fade";

const QuestionModal = props => {
  const selected = useZ(z => z.selected);
  const setSelected = useZ(z => z.setSelected);
  const score = useZ(z => z.score);
  const setScore = useZ(z => z.setScore);
  const team = useZ(z => z.team);
  const [showingAnswer, setShowingAnswer] = useState(false);
  const answered = useZ(z => z.answered);
  const setAnswered = useZ(z => z.setAnswered);

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
    setAnswered([...answered, selected.question]);
  };

  return (
    <div className="question-modal">
      <Fade bottom>
        <div className="question-modal-question">{selected.question}</div>
      </Fade>
      {showingAnswer ? (
        <Fade bottom>
          <div className="question-modal-answer">
            {selected.answer.toUpperCase()}
          </div>
        </Fade>
      ) : (
        <button className="show-answer-button" onClick={handleShowAnswer}>
          SHOW ANSWER
        </button>
      )}

      <div className="answer-buttons">
        {showingAnswer && (
          <button onClick={handleScore} className="hell-yeah-button">
            HELL YEAH!{" "}
            <span role="img" aria-label="red cross">
              ✅
            </span>
          </button>
        )}
        <button onClick={handleClose} className="close-modal-button">
          {showingAnswer ? "NOPE" : "CLOSE"}{" "}
          <span role="img" aria-label="red cross">
            ❌
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuestionModal;
