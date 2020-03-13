import React, { memo, useCallback } from "react";
import useZ from "../z";

const Question = memo(props => {
  const { value, question } = props;
  const setSelected = useZ(z => z.setSelected);
  const correctAns = useZ(z => z.correctAns);
  const answered = useZ(z => z.answered);

  const handleClick = useCallback(() => {
    setSelected(props);
  }, [setSelected, props]);

  const questionStatusEmoji = () => {
    return correctAns.includes(question) ? "🥑" : "🌮";
  };

  return (
    <>
      <div onClick={handleClick} className="question">
        {answered.includes(question) ? questionStatusEmoji() : value}
      </div>
    </>
  );
});

export default Question;
