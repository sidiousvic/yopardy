import React from "react";
import Column from "./Column";
import shortid from "shortid";
import useZ from "../z";

const Questions = () => {
  const game = useZ(z => z.game);
  const renderColumns = () => {
    if (game === null) return <></>;
    return game.map(category => (
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
