import React, { useState } from "react";

const Feedback = ({ feedbackType, onClick }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    onClick(feedbackType);
  };

  return (
    <div>
      <button onClick={handleClick}>{feedbackType}</button>
      <p>{clicks}</p>
    </div>
  );
};

export default Feedback;