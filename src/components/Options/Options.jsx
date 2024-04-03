import Feedback from "../../components/Feedback/Feedback";

const Options = ({ handleFeedbackClick, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>

      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
