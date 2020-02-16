import React, { useEffect, useCallback } from "react";
import Header from "./Header";
import Questions from "./Questions";
import Teams from "./Teams";
import QuestionModal from "./QuestionModal";
import useZ from "./z";
import moment from "moment";

function App() {
  // const score = useZ(z => z.score);
  const setScore = useZ(z => z.setScore);
  const resetScore = useZ(z => z.resetScore);
  // const team = useZ(z => z.team);
  const selected = useZ(z => z.selected);
  const scoreLastUpdated = useZ(z => z.scoreLastUpdated);

  const getScoreFromLs = useCallback(() => {
    const localStorageScore = JSON.parse(localStorage.getItem("score"));
    console.log(localStorageScore);
    if (localStorageScore) setScore(localStorageScore);
  }, [setScore]);

  const handleResetScore = () => {
    resetScore();
  };

  useEffect(() => {
    getScoreFromLs();
  }, [getScoreFromLs]);

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
