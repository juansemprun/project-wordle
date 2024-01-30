import React from 'react';

function GuessInput({
  guesses,
  setGuesses,
  gameStatus,
  setGameStatus,
  handleSubmitGuess,
}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoComplete="off"
        disabled={gameStatus !== 'running'}
        id="guess-input"
        maxLength={5}
        minLength={5}
        pattern="[A-Z]{5}"
        title="Must be 5 letter word"
        type="text"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setGuess(nextGuess.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
