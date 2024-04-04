import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";


function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const { good, neutral, bad } = values;
    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);

    setTotalFeedback(total);
    setPositivePercentage(isNaN(positive) ? 0 : positive);
  }, [values]);

  const handleFeedbackClick = (feedbackType) => {
    setValues(() => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

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
          <Feedback values={values} />
          <p>Total feedback: {totalFeedback}</p>
          <p>Positive percentage: {positivePercentage}%</p>
        </>
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;
