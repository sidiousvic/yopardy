import React from "react";
import Question from "./Question";
import shortid from "shortid";

const Column = props => {
  const { name, questions } = props;

  const renderQuestions = () => {
    return questions.map(question => (
      <Question qid={question.id} key={shortid.generate()} {...question} />
    ));
  };

  return (
    <div className="column">
      <div className="column-header">{name}</div>
      {renderQuestions()}
    </div>
  );
};

export default Column;
