import styles from './GuessTheNumberGame.module.css'; 

function NumberInput({ userGuess, onGuessChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type = "number"
        min = "1"
        max = "20"
        value = {userGuess}
        onChange = {onGuessChange}
        placeholder ="Adivina un número entre 1 y 20"
        className = {styles.input}
      />
      <button type = "submit" className = {styles.button}>Adivinar</button>
    </form>
  );
}

export default NumberInput;
