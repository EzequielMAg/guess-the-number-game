import styles from './GuessTheNumberGame.module.css'; 

function HighScore({ highScore }) {
  return (
    <div className = { styles.highScore }>
      <p> Puntaje más alto: { highScore }</p>
    </div>
  );
}

export default HighScore;
