import React from "react";
import Column from "./Column";
import data from "../data/data.json";
import shortid from "shortid";

const Questions = () => {
  const renderColumns = () => {
    return data.map(category => (
      <Column
        key={shortid.generate()}
        name={category.name}
        questions={category.questions}
      />
    ));
  };

  return <div className="questions">{renderColumns()}</div>;
};

export default Questions;
