import React, { memo, useCallback, useEffect } from "react";
import useZ from "../z";

const Question = memo(props => {
  const { value, question } = props;
  const setSelected = useZ(z => z.setSelected);
  const answered = useZ(z => z.answered);

  useEffect(() => {
    console.log(answered, question);
  });

  const handleClick = useCallback(() => {
    setSelected(question);
  }, [setSelected, question]);

  const emoji = () => {
    if (question.correct) {
      return "🥑";
    }
    return "🌮";
  };

  return (
    <>
      <div onClick={handleClick} className="question">
        {answered.includes(question.question) ? emoji() : value}
      </div>
    </>
  );
});

export default Question;
