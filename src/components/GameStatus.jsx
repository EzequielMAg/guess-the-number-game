import styles from './GuessTheNumberGame.module.css'; 

function GameStatus({ score, message, hint }) {
  return (
    <div className = { styles.status }>
      <p>Tu puntaje: { score }</p>
      <p>{ message }</p>
      {hint && <p>{ hint }</p>}
    </div>
  );
}

export default GameStatus;
