import React, { useCallback, memo } from "react";
import useZ from "../z";

const Teams = memo((props) => {
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
        className={`team ${team === "t1" && "team-selected"}`}
        id="t1"
      >
        {props.teamNames[0]} {team === "t1" ? "🔮" : "💅🏼"}
        <div className={`${score.t1 < 0 ? "score-negative" : "score-display"}`}>{score.t1}</div>
      </div>
      <div
        onClick={e => {
          handleClick(e.target.id);
        }}
        className={`team ${team === "t2" && "team-selected"}`}
        id="t2"
      >
        {props.teamNames[1]} {team === "t2" ? "🔮" : "💅🏼"}
        <div className={`${score.t2 < 0 ? "score-negative" : "score-display"}`}>{score.t2}</div>
      </div>
      <div
        onClick={e => {
          handleClick(e.target.id);
        }}
        className={`team ${team === "t3" && "team-selected"}`}
        id="t3"
      >
        {props.teamNames[2]} {team === "t3" ? "🔮" : "💅🏼"}
        <div className={`${score.t3 < 0 ? "score-negative" : "score-display"}`}>{score.t3}</div>
      </div>
    </div>
  );
});

export default Teams;
