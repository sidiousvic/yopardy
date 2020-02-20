import create from "zustand";

const [useZ] = create((set, get) => ({
  team: "t1",
  setTeam: team => set({ team }),
  selected: "",
  setSelected: selected => {
    set({ selected });
  },
  answered: [],
  setAnswered: answered => {
    localStorage.setItem("answered", JSON.stringify(answered));
    set({ answered });
  },
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
  }
}));

export default useZ;
