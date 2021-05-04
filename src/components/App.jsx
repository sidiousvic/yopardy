import React, { useEffect, useCallback } from "react";
import Header from "./Header";
import Questions from "./Questions";
import Teams from "./Teams";
import QuestionModal from "./QuestionModal";
import useZ from "../z";
import moment from "moment";
import { useAudioPlayer } from "react-use-audio-player";
import darkArcade_m4a from "../assets/dark_arcade_vic_sidious.m4a";

function App() {
  const setScore = useZ((z) => z.setScore);
  const setAnswered = useZ((z) => z.setAnswered);
  const reset = useZ((z) => z.reset);
  const selected = useZ((z) => z.selected);
  const scoreLastUpdated = useZ((z) => z.scoreLastUpdated);
  // audio
  const { togglePlayPause, ready, loading, playing, volume } = useAudioPlayer({
    src: darkArcade_m4a,
    volume: 0.2,
    format: "m4a",
    autoplay: false,
    onend: () => console.log("Audio finished!"),
  });

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
        RESET GAME
      </button>
      <div className="audio">
        <button onClick={togglePlayPause} className="toggle-play-pause-button">
          {playing ? "🔈" : "🔇"}
        </button>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            onChange={(e) => {
              volume(e.target.value / 10);
            }}
            defaultValue={0.02}
            class="slider"
            id="myRange"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
