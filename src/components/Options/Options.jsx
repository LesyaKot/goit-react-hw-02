import React from "react";
import Feedback from "../../components/Feedback/Feedback";

const Options = ({ handleButtonClick }) => {
  return (
    <div>
      <Feedback feedbackType="Good" onClick={handleButtonClick} />
      <Feedback feedbackType="Neutral" onClick={handleButtonClick} />
      <Feedback feedbackType="Bad" onClick={handleButtonClick} />
    </div>
  );
};

export default Options;