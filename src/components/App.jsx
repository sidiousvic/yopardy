import React, { useEffect, useCallback, useState } from "react";
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

  const [teamNames, setTeamNames] = useState(["Team 1", "Team 2", "Team 3"])

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
    getTeamNames();
  }, [getScoreFromLs, getAnsweredFromLs]);

  //Upon starting the App, 3 prompts are generated asking for the name of each of the 3 teams.
  //If no name is input the default name Team 1, Team 2 or Team 3 is used.
  function getTeamNames(){
    let teamNames = []
    let team1Name = prompt("Please enter team 1 name", "Team 1");
    if (team1Name === null){
      team1Name = "Team 1"
    }
    teamNames.push(team1Name)
    let team2Name = prompt("Please enter team 2 name", "Team 2");
    if (team2Name === null){
      team2Name = "Team 2"
    }
    teamNames.push(team2Name)
    let team3Name = prompt("Please enter team 3 name", "Team 3");
    if (team3Name === null){
      team3Name = "Team 3"
    }
    teamNames.push(team3Name)
    setTeamNames(teamNames);
  }

  return (
    <div className="App">
      <Header />
      <Questions />
      <Teams teamNames={teamNames}/>
      {selected && <QuestionModal />}
      <div className="score-last-updated">
        SCORE LAST UPDATED:{" "}
        {moment(scoreLastUpdated.lastUpdated)
          .format("MMMM Do YYYY, h:mm:ss a")
          .toUpperCase()}
      </div>
      <button onClick={handleResetScore} className="reset-score-button">
        RESET GAME
      </button>
    </div>
  );
}

export default App;
