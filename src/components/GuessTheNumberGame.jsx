 import { useState } from 'react';
import NumberInput from './NumberInput';
import GameStatus from './GameStatus';
import HighScore from './HighScore';
import styles from './GuessTheNumberGame.module.css'; 

function GuessTheNumberGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber()); // Guarda el número que el usuario tiene que adivinar
  const [userGuess, setUserGuess] = useState(''); // Guarda el valor ingresado por el usuario
  const [score, setScore] = useState(10); // Puntaje inicial
  const [highScore, setHighScore] = useState(0);    // Registra el puntaje más alto que el usuario ha alcanzado en sesiones anteriores
  const [message, setMessage] = useState(''); // Muestra msjs al usuario sobre el estado del juego (como in/correcto, intenta de nuevo, etc.).
  const [hint, setHint] = useState(''); // Para darle pistas al usuario sobre si su suposición es demasiado alta o baja en comparación con el número objetivo

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const guess = parseInt(userGuess, 10);

    if (guess === targetNumber) {
      setMessage('¡Correcto! Has ganado.');
      setScore(prevScore => {
        const newScore = prevScore + 10; // Incremento del puntaje
        setHighScore(prevHighScore => Math.max(prevHighScore, newScore));
        return newScore;
      });
      setTargetNumber(generateRandomNumber()); // Generar un nuevo número objetivo
      setHint('');
    
    } else {
      setMessage('Incorrecto. Intenta de nuevo.');
      setScore(prevScore => {
        const newScore = prevScore - 1; // Decremento del puntaje
        if (newScore <= 0) {
          setMessage('¡Has perdido! El puntaje llegó a 0.');
          setHighScore(prevHighScore => Math.max(prevHighScore, 0));
          return 10; // Reiniciar puntaje
        }
        return newScore;
      });
      setHint(guess < targetNumber ? 'El número es más alto.' : 'El número es más bajo.');
    }

    setUserGuess('');
  };

  const handleRestart = () => {
    setTargetNumber(generateRandomNumber());
    setScore(10); // Reiniciar puntaje
    setMessage('');
    setHint('');
    setUserGuess('');
  };

  return (
    <div className = { styles.container }>
      <h1> Adivinar el número </h1>
      <NumberInput 
        userGuess = { userGuess} 
        onGuessChange = { handleGuessChange } 
        onSubmit = { handleSubmit } 
      />

      <button onClick = { handleRestart } className = { styles['cancel-button'] }> Reiniciar </button>

      <GameStatus score = { score } message = { message } hint = { hint } />
      <HighScore highScore = { highScore } />
    </div>
  );
}

export default GuessTheNumberGame; 
