import { useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";


function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedbackClick = (feedbackType) => {
    setValues(() => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;


// const [resetClick, setResetClick] = useState (false)
// const handleResetClick = (totalFeedback) => {
//   setResetClick(true);
// };
const resetFeedback = () => {
  setGood(0);
  setNeutral(0);
  setBad(0);
};

  return (
    <>
          <Description />

      <Options handleFeedbackClick={handleFeedbackClick}
       totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}/>

      {totalFeedback > 0 ? (
        <Feedback values={values} />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;