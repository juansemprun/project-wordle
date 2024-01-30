import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentaiveGuess) {
    console.log(guesses.length, NUM_OF_GUESSES_ALLOWED);
    console.log(guesses);
    if (tentaiveGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        guesses={guesses}
        handleSubmitGuess={handleSubmitGuess}
        setGameStatus={setGameStatus}
        setGuesses={setGuesses}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
