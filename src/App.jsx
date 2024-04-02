import { useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;

  const Notification = () => {
    return <p>No feedback yet</p>;
  };
  const [buttonClick, setButtonClick] = useState(false);
  const handleButtonClick = () => {
    setButtonClick(true);
  };

  return (
    <>
      <Description />

      <Options handleButtonClick={handleButtonClick} />
      {totalFeedback > 0 || buttonClick ? (
        <Feedback good={good} neutral={neutral} bad={bad} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

// const [feedbackTypes, setFeedbackTypes] = useState({
//     good: 0,
//   neutral: 0,
//   bad: 0
//   });
