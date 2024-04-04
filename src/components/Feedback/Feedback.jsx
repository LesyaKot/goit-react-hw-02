import styles from './Feedback.module.css'

const Feedback = ({ clicks }) => {
  const { good, neutral, bad, positivePercentage, total } = clicks;

  return (
    <div className={styles.wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {/* <p>Total: {total}</p>
      <p>{positivePercentage}</p> */}
    </div>
  );
};

export default Feedback;
