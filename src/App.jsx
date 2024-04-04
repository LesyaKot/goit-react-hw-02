import React, { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : null;
};

function App() {
  const [clicks, setClicks] = useState(
    getInitialClicks() || { good: 0, neutral: 0, bad: 0 }
  );
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const { good, neutral, bad } = clicks || { good: 0, neutral: 0, bad: 0 };
    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);

    setTotalFeedback(total);
    setPositivePercentage(isNaN(positive) ? 0 : positive);
  }, [clicks]);

  const handleFeedbackClick = (feedbackType) => {
    setClicks((clicks) => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <>
      <Description />
      <Options
        handleFeedbackClick={handleFeedbackClick}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback clicks={clicks} />
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positivePercentage}%</p>
        </>
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;
