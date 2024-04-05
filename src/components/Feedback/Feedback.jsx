import styles from "./Feedback.module.css";

const Feedback = ({ clicks, positivePercentage, total }) => {
  const { good, neutral, bad } = clicks;

  return (
    <div className={styles.wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
