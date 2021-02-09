import React, { useEffect, useState } from "react";
import useZ from "../z";
import Fade from "react-reveal/Fade";
import { set } from "object-path";

const QuestionModal = (props) => {
  const selected = useZ((z) => z.selected);
  const setSelected = useZ((z) => z.setSelected);
  const score = useZ((z) => z.score);
  const setScore = useZ((z) => z.setScore);
  const team = useZ((z) => z.team);
  const [showingAnswer, setShowingAnswer] = useState(false);
  const answered = useZ((z) => z.answered);
  const setAnswered = useZ((z) => z.setAnswered);
  const timer = useZ((z) => z.timer);
  const setTimer = useZ((z) => z.setTimer);
  const [timerStarted, setTimerStarted] = useState(false);
  const resetTimer = () => setTimer(10);

  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        if (~~timer - 1 < 1) setShowingAnswer(true);
        else setTimer(timer - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  const handleStartTimer = () => setTimerStarted(true);

  const handleClose = () => {
    setSelected(null);
    resetTimer();
    setShowingAnswer(!showingAnswer);
  };

  const handleScore = (isCorrectAnswer) => {
    if (isCorrectAnswer === true)
      setScore({ ...score, [team]: score[team] + selected.value });
    else
      setScore({
        ...score,
        [team]:
          score[team] - selected.value / 2 > 0
            ? score[team] - selected.value / 2
            : 0,
      });
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
        <>
          <span
            id="timer"
            role="img"
            aria-label="red cross"
            onClick={handleStartTimer}
            style={{ transform: `rotate(${timer * (342 - 18)}deg)` }}
          >
            {timerStarted ? `${timer}⏳` : "⌛️"}
          </span>
          <button className="show-answer-button" onClick={handleShowAnswer}>
            SHOW ANSWER
          </button>
          <button className="close-button" onClick={handleClose}>
            <span role="img" aria-label="red cross">
              GO 🔙
            </span>
          </button>
        </>
      )}

      {showingAnswer && (
        <div className="answer-buttons">
          <button
            onClick={() => handleScore(true)}
            className="hell-yeah-button"
          >
            HELL YEAH!{" "}
            <span role="img" aria-label="red cross">
              ✅
            </span>
          </button>
          <button
            onClick={() => handleScore(false)}
            className="close-modal-button"
          >
            {showingAnswer ? "NOPE" : "CLOSE"}{" "}
            <span role="img" aria-label="red cross">
              ❌
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionModal;
