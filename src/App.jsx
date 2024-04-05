import React, { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./Notification/Notification";

const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("clicks");
  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [clicks, setClicks] = useState(
    getInitialClicks() || { good: 0, neutral: 0, bad: 0 }
  );

  const { good, neutral, bad } = clicks;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

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
        totalFeedback={total}
        resetFeedback={resetFeedback}
      />
      {total > 0 ? (
        <Feedback
          clicks={clicks}
          positivePercentage={positivePercentage}
          total={total}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
