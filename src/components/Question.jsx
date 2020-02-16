import React, { memo, useCallback } from "react";
import useZ from "../z";

const Question = memo(props => {
  const { value, question } = props;
  const setSelected = useZ(z => z.setSelected);

  const handleClick = useCallback(() => {
    setSelected(question);
  }, [setSelected, question]);

  return (
    <>
      <div onClick={handleClick} className="question">
        {value}
      </div>
    </>
  );
});

export default Question;
