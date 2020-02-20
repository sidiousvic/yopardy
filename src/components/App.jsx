import React, { useEffect, useCallback } from "react";
import Header from "./Header";
import Questions from "./Questions";
import Teams from "./Teams";
import QuestionModal from "./QuestionModal";
import useZ from "../z";
import moment from "moment";

function App() {
  const setScore = useZ(z => z.setScore);
  const setAnswered = useZ(z => z.setAnswered);
  const reset = useZ(z => z.reset);
  const selected = useZ(z => z.selected);
  const scoreLastUpdated = useZ(z => z.scoreLastUpdated);

  const getScoreFromLs = useCallback(() => {
    const localStorageScore = JSON.parse(localStorage.getItem("score"));
    if (localStorageScore) setScore(localStorageScore);
  }, [setScore]);

  const getAnsweredFromLs = useCallback(() => {
    const localStorageAnswered = JSON.parse(localStorage.getItem("answered"));
    if (localStorageAnswered) setAnswered(localStorageAnswered);
  }, [setAnswered]);

  const handleResetScore = () => {
    reset();
  };

  useEffect(() => {
    getScoreFromLs();
    getAnsweredFromLs();
  }, [getScoreFromLs, getAnsweredFromLs]);

  return (
    <div className="App">
      <Header />
      <Questions />
      <Teams />
      {selected && <QuestionModal />}
      <div className="score-last-updated">
        SCORE LAST UPDATED:{" "}
        {moment(scoreLastUpdated.lastUpdated)
          .format("MMMM Do YYYY, h:mm:ss a")
          .toUpperCase()}
      </div>
      <button onClick={handleResetScore} className="reset-score-button">
        RESET SCORE
      </button>
    </div>
  );
}

export default App;
