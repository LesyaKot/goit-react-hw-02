import styles from "./Options.module.css";

const Options = ({ handleFeedbackClick, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>

      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
export default Options;
