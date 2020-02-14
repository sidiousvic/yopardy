import React, { useCallback, memo } from "react";
import useZ from "./z";

const Teams = memo(() => {
  const setTeam = useZ(z => z.setTeam);
  const team = useZ(z => z.team);
  const score = useZ(z => z.score);

  const handleClick = useCallback(
    t => {
      setTeam(t);
    },
    [setTeam]
  );

  return (
    <div className="teams">
      <div
        onClick={e => {
          handleClick(e.target.id);
        }}
        className="team"
        id="t1"
      >
        Team 1 <div className="score-display">{score.t1}</div>{" "}
        {team === "t1" && "🔥"}
      </div>
      <div
        onClick={e => {
          handleClick(e.target.id);
        }}
        className="team"
        id="t2"
      >
        Team 2 <div className="score-display">{score.t2}</div>
        {team === "t2" && "🔥"}
      </div>
      <div
        onClick={e => {
          handleClick(e.target.id);
        }}
        className="team"
        id="t3"
      >
        Team 3 <div className="score-display">{score.t3}</div>{" "}
        {team === "t3" && "🔥"}
      </div>
    </div>
  );
});

export default Teams;
