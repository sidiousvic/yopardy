import create from "zustand";

const [useZ] = create((set, get) => ({
  team: "t1",
  selected: "",
  setSelected: selected => {
    set({ selected });
  },
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
  resetScore: () => {
    const score = {
      t1: 0,
      t2: 0,
      t3: 0
    };
    localStorage.setItem("score", JSON.stringify(score));
    set({ score });
  }
}));

export default useZ;
