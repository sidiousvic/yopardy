import create from "zustand";
import axios from "axios";
require("dotenv").config();

const [useZ] = create((set, get) => ({
  // team
  team: "t1",
  setTeam: team => set({ team }),
  score: {
    t1: 0,
    t2: 0,
    t3: 0
  },
  setScore: score => {
    localStorage.setItem("score", JSON.stringify(score));
    const scoreLastUpdated = {
      score: score,
      lastUpdated: new Date().toString()
    };
    set({ scoreLastUpdated });
    set({ score });
  },
  scoreLastUpdated: {
    score: {
      t1: 0,
      t2: 0,
      t3: 0
    },
    lastUpdated: new Date().toString()
  },
  setScoreLastUpdated: scoreLastUpdated => set({ scoreLastUpdated }),
  reset: () => {
    const score = {
      t1: 0,
      t2: 0,
      t3: 0
    };
    const answered = [];
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("answered", JSON.stringify());
    set({ answered });
    set({ score });
  },
  // questions
  selected: "",
  setSelected: selected => {
    set({ selected });
  },
  answered: [],
  setAnswered: answered => {
    localStorage.setItem("answered", JSON.stringify(answered));
    set({ answered });
  },
  // game state
  game: null,
  startGame: () => {
    axios.get(process.env.REACT_APP_SERVER_ROOT + "game").then(res => {
      set({ game: res.data });
    });
  }
}));

export default useZ;
